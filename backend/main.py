from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import engine, SessionLocal, Base
import models, schemas


app = FastAPI()

# Enable CORS for React (running on localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create all tables in the database
Base.metadata.create_all(bind=engine)

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Create user endpoint (previously defined)
@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = models.User(avatar_seed=user.avatar_seed, name=user.name,
                          password=user.password, position=user.position)
    try:
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
    except:
        db.rollback()
        print("name already in the db")
    
    return db_user

# New endpoint to add a skill to a user
@app.post("/users/{user_id}/skills", response_model=schemas.Skill)
def add_skill_to_user(user_id: int, skill: schemas.SkillCreate,
                      db: Session = Depends(get_db)):
    # Check if user exists
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Create the new skill and associate it with the user
    db_skill = models.Skill(user_id=user_id, skill_name=skill.skill_name, proficiency=skill.proficiency)
    db.add(db_skill)
    db.commit()
    db.refresh(db_skill)
    
    return db_skill

# Log in as a user and gets its data
@app.post("/users/login", response_model=schemas.User)
def get_user(login_data: schemas.LoginRequest, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.name == login_data.name).first()
    if db_user is None:
        raise HTTPException(status_code=400, detail="Invalid username or password")
    
    # Verify the password
    if db_user.password != login_data.password:
        raise HTTPException(status_code=400, detail="Invalid username or password")
    return db_user
