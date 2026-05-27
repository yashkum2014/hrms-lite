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

# Tools & Technologies Used

| Tool / Technology | Type | Usage in the Project |
|-------------------|------|----------------------|
| **Python** | Programming Language | Main backend programming language used for API development and business logic |
| **FastAPI** | Backend Framework | Used to build REST APIs and backend services |
| **React** | Frontend Library | Used for building the user interface and component-based frontend |
| **Vite** | Frontend Build Tool | Used for fast frontend development and optimized build performance |
| **JavaScript** | Programming Language | Used for frontend logic and React components |
| **JSX** | React Syntax Extension | Used for creating frontend UI components |
| **Axios** | HTTP Client Library | Used for frontend-backend API communication |
| **CSS** | Styling Language | Used for frontend styling and UI design |
| **PostgreSQL** | Relational Database | Used for storing employee and attendance records |
| **SQLAlchemy** | ORM Framework | Used for database interaction and ORM-based CRUD operations |
| **Pydantic** | Data Validation Library | Used for request validation and schema management in FastAPI |
| **REST APIs** | API Architecture | Used for communication between frontend and backend |
| **CRUD Operations** | Backend Logic | Used for Create, Read, Update, Delete operations on employee and attendance data |
| **JSON** | Data Exchange Format | Used for API request and response handling |
| **Render** | Cloud Deployment Platform | Used for deploying backend services and PostgreSQL database |
| **Render Static Site** | Frontend Hosting Service | Used for hosting the React frontend |
| **Git** | Version Control Tool | Used for version tracking and source code management |
| **GitHub** | Repository Platform | Used for project hosting and collaboration |
| **VS Code** | IDE / Code Editor | Used for frontend and backend development |
| **npm** | Package Manager | Used for installing frontend dependencies |
| **pip** | Python Package Manager | Used for installing backend dependencies |
| **Uvicorn** | ASGI Server | Used to run the FastAPI backend application |
| **HTTP Requests/Responses** | Communication Protocol | Used for frontend-backend interaction |
| **Frontend-Backend Separation** | Software Architecture | Used to maintain modular full-stack application structure |
| **Router-Based Architecture** | Backend Structure | Used for organizing API endpoints into separate modules |
| **Database Models** | Backend Architecture | Used for defining database tables and relationships |
| **Schema Validation** | Backend Validation | Used for validating incoming request data |
| **Error Handling** | Backend Logic | Used for handling invalid requests and improving reliability |
| **Dashboard Summary Logic** | Application Feature | Used for displaying employee and attendance statistics |
| **Attendance Filtering Logic** | Feature Implementation | Used for filtering attendance data by date |
| **Environment Configuration** | Deployment Practice | Used for secure database and backend configuration |
| **API Service Layer** | Frontend Architecture | Used for centralized API request handling |
| **Component-Based Architecture** | Frontend Architecture | Used for reusable frontend UI components |
| **SQLite (Local Development)** | Local Database | Used for local testing before PostgreSQL deployment |

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



