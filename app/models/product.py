from .db import db

class Product(db.Model):
  __tablename__ = 'products'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), nullable=False)
  price = db.Column(db.Numeric(scale=4, precision=6, asdecimal=True), nullable=False)
  description = db.Column(db.String)
  imageUrl = db.Column(db.String(280))
  rating = db.Column(db.Integer)
  category = db.Column(db.String(50))
  franchise = db.Column(db.String(50))
  userId = db.Column(db.Integer, db.ForeignKey('users.id'))

  user = db.relationship('User', back_populates='products')
  cart_items = db.relationship('CartItem', back_populates='product')
  comments = db.relationship('Comment', back_populates='product')

  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name,
      'price': float(self.price),
      'description': self.description,
      'imageUrl': self.imageUrl,
      'rating': self.rating,
      'category': self.category,
      'franchise': self.franchise,
      'userId': self.userId
    }
