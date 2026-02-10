from sqlalchemy.orm import Session
from models import Employee, Attendance
from schemas import EmployeeCreate, AttendanceCreate

def create_employee(db: Session, emp: EmployeeCreate):
    employee = Employee(**emp.dict())
    db.add(employee)
    db.commit()
    db.refresh(employee)
    return employee


def get_employees(db: Session):
    return db.query(Employee).all()


def delete_employee(db: Session, emp_id: int):
    employee = db.query(Employee).filter(Employee.id == emp_id).first()
    if employee:
        db.delete(employee)
        db.commit()
    return employee


def add_attendance(db: Session, attendance: AttendanceCreate):
    record = Attendance(**attendance.dict())
    db.add(record)
    db.commit()
    db.refresh(record)
    return record


def get_attendance_by_employee(db: Session, emp_id: int):
    return db.query(Attendance).filter(Attendance.employee_id == emp_id).all()
