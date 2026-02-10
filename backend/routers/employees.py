from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from schemas import EmployeeCreate, EmployeeResponse
from crud import create_employee, get_employees, delete_employee
from models import Employee

router = APIRouter(prefix="/employees", tags=["Employees"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=EmployeeResponse, status_code=201)
def add_employee(emp: EmployeeCreate, db: Session = Depends(get_db)):
    existing = db.query(Employee).filter(
        (Employee.employee_id == emp.employee_id) | (Employee.email == emp.email)
    ).first()
    if existing:
        raise HTTPException(status_code=409, detail="Employee already exists")
    return create_employee(db, emp)

@router.get("/", response_model=list[EmployeeResponse])
def list_employees(db: Session = Depends(get_db)):
    return get_employees(db)

@router.delete("/{emp_id}", status_code=204)
def remove_employee(emp_id: int, db: Session = Depends(get_db)):
    emp = delete_employee(db, emp_id)
    if not emp:
        raise HTTPException(status_code=404, detail="Employee not found")
