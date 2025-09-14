# app/routers/auth.py
from fastapi import APIRouter, HTTPException
from app.schema.user_schema import UserRegister, UserLogin
from app.database import users_collection
from app.utils.hash import hash_password, verify_password

auth_router = APIRouter(prefix="/auth", tags=["Auth"])

@auth_router.post("/register")
def register(user: UserRegister):
    if user.password != user.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    if users_collection.find_one({"name": user.name}):
        raise HTTPException(status_code=400, detail="User already exists")

    hashed_pw = hash_password(user.password)
    users_collection.insert_one({"name": user.name, "password": hashed_pw})

    return {"msg": "User registered successfully!"}

@auth_router.post("/login")
def login(user: UserLogin):
    db_user = users_collection.find_one({"name": user.name})
    if not db_user:
        raise HTTPException(status_code=400, detail="Invalid credentials")

    if not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=400, detail="Invalid credentials")

    return {"msg": f"Welcome {user.name}!"}
