# app/main.py
from fastapi import FastAPI
from app.routes.auth import auth_router 

app = FastAPI(title="TRIAGE-X Backend")

app.include_router(auth_router, prefix="/auth", tags=["Auth"])

@app.get("/")
def root():
    return {"msg": "Triage-X Backend Running 🚀"}
