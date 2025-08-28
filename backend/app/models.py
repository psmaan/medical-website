from sqlalchemy import Column, Integer, String, Date, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    location = Column(String)
    phone_number = Column(String)
    age = Column(Integer)
    gender = Column(String)

    # Establishes a one-to-many relationship
    medical_history = relationship("MedicalHistory", back_populates="owner")
    medications = relationship("Medication", back_populates="owner")

class MedicalHistory(Base):
    __tablename__ = "medical_history"

    id = Column(Integer, primary_key=True, index=True)
    condition = Column(String, index=True)
    diagnosis_date = Column(Date)
    treatment = Column(String)
    user_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="medical_history")

class Medication(Base):
    __tablename__ = "medications"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    dosage = Column(String)
    frequency = Column(String)
    user_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="medications")