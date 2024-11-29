from pydantic import BaseModel
from typing import List

from pydantic import BaseModel

# Base schema for skills with common fields
class SkillBase(BaseModel):
    skill_name: str
    proficiency: float

    class Config:
        orm_mode = True  # Tells Pydantic to work with SQLAlchemy models

# Schema for creating a skill, inherits from SkillBase
class SkillCreate(SkillBase):
    user_id: int  # Field specific to creating a skill

# Schema for retrieving a skill, inherits from SkillBase
class Skill(SkillBase):
    id: int  # Field specific to the retrieved skill

class UserBase(BaseModel):
    avatar_seed: int
    name: str
    password: str
    position: str
    
    class Config:
        orm_mode = True

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int
    skills: List[Skill] = []

# Login request schema
class LoginRequest(BaseModel):
    name: str
    password: str