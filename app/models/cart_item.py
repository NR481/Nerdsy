from .db import db

class CartItem(db.Model):
  __tablename__ = 'cart_items'

  id = db.Column(db.Integer, primary_key=True)
  productId = db.Column(db.Integer, nullable=False)
  cartId = db.Column(db.Integer, db.ForeignKey('shopping_carts'), nullable=False)
  quantity = db.Column(db.Integer, nullable=False)

  product = db.relationship('Product', back_populates='cart_item')
  shopping_carts = db.relationship('ShoppingCart', back_populates='cart_items')
