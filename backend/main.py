from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import engine, SessionLocal, Base
import crud, models, schemas


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
    db_user = models.User(name=user.name, password=user.password, position=user.position)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Get user by ID (previously defined)
@app.get("/users/{user_id}", response_model=schemas.User)
def get_user_by_id(user_id: int, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

# New endpoint to add a skill to a user
@app.post("/users/{user_id}/skills", response_model=schemas.Skill)
def add_skill_to_user(user_id: int, skill: schemas.SkillCreate, db: Session = Depends(get_db)):
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