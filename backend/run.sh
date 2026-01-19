#!/bin/bash
echo "🚀 Iniciando backend FastAPI..."
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000