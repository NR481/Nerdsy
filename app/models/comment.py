from .db import db

class Comment(db.Model):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, primary_key=True) 
  comment = db.Column(db.String, nullable=False)
  rating = db.Column(db.Integer)
  product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  product = db.relationship('Product', back_populates='comments')
  user = db.relationship('User', back_populates='comments')
