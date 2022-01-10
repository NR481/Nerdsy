from .db import db

class ShoppingCart(db.Model):
  __tablename__ = "shopping_carts"

  id = db.Column(db.Integer, primary_key=True)
  total = db.Column(db.Numeric(scale=2, precision=5, asdecimal=True), nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  user = db.relationship('User', back_populates='shopping_cart')
  cart_items = db.relationship('CartItem', back_populates='shopping_carts')
