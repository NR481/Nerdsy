from app.models.product import db, Product

def seed_valorant():
    blasterx_set = Product(
        name='BlasterX',
        price=85.00,
        description='Toy Story themed 3-d printed art set',
        imageUrl='https://res.cloudinary.com/gabrielaspuria/image/upload/v1641785336/Nerdsy/BlastX_ekovlu.jpg',
        userId=2,
        rating=3,
        category='Art',
        franchise='Valorant'
    )

    ion_set = Product(
        name='Ion',
        price=71.00,
        description='Alien themed 3-d printed art set',
        imageUrl='https://res.cloudinary.com/gabrielaspuria/image/upload/v1641785660/Nerdsy/ion_uqz8h9.png',
        userId=2,
        rating=5,
        category='Art',
        franchise='Valorant'
    )

    pizza_buddy = Product(
        name='Pizza Buddy',
        price=5.00,
        description='Pizza buddy for your battles',
        imageUrl='https://res.cloudinary.com/gabrielaspuria/image/upload/v1641785338/Nerdsy/pizza_ekfjqz.png',
        userId=2,
        rating=5,
        category='Accessories',
        franchise='Valorant'
    )

    jett_buddy = Product(
        name='Jett Buddy',
        price=5.00,
        description='Best agent buddy for your battles',
        imageUrl='https://res.cloudinary.com/gabrielaspuria/image/upload/v1641785770/Nerdsy/jett_uetpwj.png',
        userId=2,
        rating=5,
        category='Accessories',
        franchise='Valorant'
    )

    jett_knife = Product(
        name='Jett Knife',
        price=35.00,
        description='3-d printed knife for you to cosplay the best agent',
        imageUrl='https://res.cloudinary.com/gabrielaspuria/image/upload/v1641786013/Nerdsy/jett_knife_ntoeqc.png',
        userId=2,
        rating=5,
        category='Apparel',
        franchise='Valorant'
    )

    db.session.add(blasterx_set)
    db.session.add(ion_set)
    db.session.add(pizza_buddy)
    db.session.add(jett_buddy)
    db.session.add(jett_knife)

    db.session.commit()

def undo_valorant():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
