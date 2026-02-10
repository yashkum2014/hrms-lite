from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from schemas import AttendanceCreate, AttendanceResponse
from crud import add_attendance, get_attendance_by_employee
from models import Employee

router = APIRouter(prefix="/attendance", tags=["Attendance"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=AttendanceResponse, status_code=201)
def mark_attendance(att: AttendanceCreate, db: Session = Depends(get_db)):
    emp = db.query(Employee).filter(Employee.id == att.employee_id).first()
    if not emp:
        raise HTTPException(status_code=404, detail="Employee not found")
    return add_attendance(db, att)

@router.get("/{employee_id}", response_model=list[AttendanceResponse])
def view_attendance(employee_id: int, db: Session = Depends(get_db)):
    return get_attendance_by_employee(db, employee_id)
