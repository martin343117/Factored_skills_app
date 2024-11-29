from sqlalchemy.orm import Session
import models, schemas

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(
        name=user.name,
        password=user.password,
        position=user.position
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def create_skill(db: Session, skill: schemas.SkillBase, user_id: int):
    db_skill = models.Skill(**skill.dict(), user_id=user_id)
    db.add(db_skill)
    db.commit()
    db.refresh(db_skill)
    return db_skill