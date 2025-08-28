from pydantic import BaseModel
from typing import List, Optional
from datetime import date

# Schemas for Medication
class MedicationBase(BaseModel):
    name: str
    dosage: str
    frequency: str

class MedicationCreate(MedicationBase):
    pass

class Medication(MedicationBase):
    id: int
    user_id: int
    class Config:
        orm_mode = True

# Schemas for Medical History
class MedicalHistoryBase(BaseModel):
    condition: str
    diagnosis_date: Optional[date] = None
    treatment: str

class MedicalHistoryCreate(MedicalHistoryBase):
    pass

class MedicalHistory(MedicalHistoryBase):
    id: int
    user_id: int
    class Config:
        orm_mode = True

# Schemas for User
class UserBase(BaseModel):
    email: str
    location: Optional[str] = None
    phone_number: Optional[str] = None
    age: Optional[int] = None
    gender: Optional[str] = None

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    medical_history: List[MedicalHistory] = []
    medications: List[Medication] = []
    class Config:
        orm_mode = True # Allows mapping from SQLAlchemy models

# Schema for Token
class TokenData(BaseModel):
    email: Optional[str] = None