from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo123', firstName='Demo', lastName='User', email='demo@aa.io', password='password')
    marnie = User(
        username='Marnie123', firstName='Marnie', lastName='Smith', email='marnie@aa.io', password='password')
    bobbie = User(
        username='Bobbie123', firstName='Bobbie', lastName='Jones', email='bobbie@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
