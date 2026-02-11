# HRMS Lite – Full Stack Application

## Project Overview

HRMS Lite is a lightweight Human Resource Management System designed to manage employee records and track daily attendance.

The application simulates a basic internal HR tool for a single admin user and focuses on core HR operations with a clean and functional interface.

Core features include:

- Employee management (add, view, delete)
- Attendance tracking (mark present/absent by date)
- Attendance history per employee
- Dashboard summary
- Server-side validation and error handling
- Fully deployed frontend and backend

---

## Tech Stack

### Frontend
- React
- Vite
- Axios
- CSS

### Backend
- FastAPI
- SQLAlchemy
- PostgreSQL
- Pydantic

### Deployment
- Render (Backend + Database)
- Render Static Site (Frontend)

---

## Live URLs

Frontend:  
https://hrms-lite-frontend-duor.onrender.com

Backend API (Swagger Docs):  
https://hrms-lite-backend-4rz9.onrender.com/docs

GitHub Repository:  
https://github.com/yashkum2014/hrms-lite

---

## Bonus Features

- Filter attendance records by date  
- Display total present days per employee  
- Basic dashboard summary (total employees & present count)

---

## Running the Project Locally

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload

Backend will run at:

http://127.0.0.1:8000
```
### Frontend
```bash
cd frontend
npm install
npm run dev

Frontend will run at:

http://localhost:5173
```



