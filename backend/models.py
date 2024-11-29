from database import Base
from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship

class User(Base):
  __tablename__='users'
  
  id =Column(Integer, primary_key=True, index=True)
  avatar_seed = Column(Integer)
  name = Column(String, unique=True)
  password = Column(String)
  position = Column(String)
  
  skills = relationship("Skill", back_populates="user")
  
class Skill(Base):
  __tablename__="skills"
  
  id =Column(Integer, primary_key=True, index=True)
  skill_name = Column(String)
  proficiency =Column(Float)
  user_id = Column(Integer, ForeignKey('users.id'))
  
  user = relationship("User", back_populates="skills")
  