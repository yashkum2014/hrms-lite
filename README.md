# HRMS Lite – Full Stack Application

## Overview

HRMS Lite is a lightweight Human Resource Management System that allows an admin to manage employees and track daily attendance.  
It is built as a full-stack application with a React frontend and FastAPI backend.

Features:

- Add / view / delete employees
- Mark daily attendance
- View attendance per employee
- Email validation & duplicate handling
- PostgreSQL persistence
- Fully deployed frontend & backend

---

## Tech Stack

Frontend:

- React
- Vite
- Axios
- CSS

Backend:

- FastAPI
- SQLAlchemy
- PostgreSQL
- Pydantic

Deployment:

- Render (Backend + Database)
- Render Static Site (Frontend)

---

## Live URLs

Frontend:
https://hrms-lite-frontend-duor.onrender.com

Backend API:
https://hrms-lite-backend-4rz9.onrender.com/docs

GitHub Repository:
https://github.com/yashkum2014/hrms-lite

---

## Run Locally

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```
