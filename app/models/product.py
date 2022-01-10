from .db import db

class Product(db.Model):
  __tablename__ = 'products'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  price = db.Column(db.Integer, nullable=False)
  description = db.Column(db.String)
  imageUrl = db.Column(db.String, nullable=False)
  rating = db.Column(db.Integer)
  category = db.Column(db.String)
  franchise = db.Column(db.String)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

  user = db.relationship('User', back_populates='products')
