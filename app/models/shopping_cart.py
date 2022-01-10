from .db import db

class ShoppingCart(db.Model):
  __tablename__ = "shopping_carts"

  id = db.Column(db.Integer, primary_key=True) 
  total = db.Column(db.Integer, nullable=False)
  user_id = db.Column(db.Integer, nullable=False)
