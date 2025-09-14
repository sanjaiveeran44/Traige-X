# app/schemas/user_schema.py
from pydantic import BaseModel, Field

class UserRegister(BaseModel):
    name: str = Field(..., min_length=3)
    password: str = Field(..., min_length=6)
    confirm_password: str

class UserLogin(BaseModel):
    name: str
    password: str
