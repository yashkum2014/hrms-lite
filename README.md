# HRMS Lite

A lightweight Human Resource Management System to manage employees and track attendance.

## Tech Stack

- Frontend: React, Vite
- Backend: FastAPI
- Database: PostgreSQL / SQLite
- Deployment: Vercel, Render

## Features

- Add / View / Delete employees
- Mark attendance (Present / Absent)
- View attendance per employee

## Local Setup

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
