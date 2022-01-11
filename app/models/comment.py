from .db import db

class Comment(db.Model):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, primary_key=True)
  comment = db.Column(db.String, nullable=False)
  rating = db.Column(db.Integer)
  productId = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  product = db.relationship('Product', back_populates='comments')
  user = db.relationship('User', back_populates='comments')

  def to_dict(self):
    return {
      'id': self.id,
      'comment': self.comment,
      'rating': self.rating,
      'productId': self.productId,
      'userId': self.userId
    }
