from fastapi import FastAPI

app = FastAPI(title="Personal Trainer IA - MVP")

@app.get("/")
def root():
    return {"message": "API backend funcionando!"}