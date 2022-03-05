from app.models.db import db
from sqlalchemy import ForeignKey

class Image(db.Model):
    __tablename__='images'

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String, nullable=False)
    summary = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, nullable=False, server_default=db.func.now(), server_onupdate=db.func.now())
    user = db.relationship("Image", back_populates="images")