from app.models import db, Comment

def seed_comments():
  demo_comment1 = Comment(
    comment="It's an amazing watch band, fits just right. Thank you so much 😊",
    rating=5,
    productId=1,
    userId=2
  )

  demo_comment2 = Comment(
    comment="It was BEAUTIFUL! It was a gift for my sister and she absolutely loved it! everyone loved it and said how gorgeous it was! I was blown away by it. it's stunning. beyond worth the money. if I had an apple watch I would buy another for myself lol. 5 stars since 100 isn't an option.",
    rating=5,
    productId=1,
    userId=2
  )

  db.session.add(demo_comment1)
  db.session.add(demo_comment2)

  db.session.commit()

def undo_comments():
  db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
  db.session.commit()
