from .db import db

class Product(db.Model):
  __tablename__ = 'products'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), nullable=False)
  price = db.Column(db.Numeric(scale=2, precision=5, asdecimal=True), nullable=False)
  description = db.Column(db.String)
  imageUrl = db.Column(db.String(280))
  rating = db.Column(db.Integer)
  category = db.Column(db.String(50))
  franchise = db.Column(db.String(50))
  userId = db.Column(db.Integer, db.ForeignKey('users.id'))

  user = db.relationship('User', back_populates='products')
