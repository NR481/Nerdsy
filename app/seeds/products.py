from app.models.product import db, Product

def seed_products():
  watch_bands = Product(
    name='Wizard Inspired Watch Band',
    price=22.00,
    description='Wizard Inspired Watch Band , compatible with Apple watch and available for all series and all sizes. Natural engraving or color filling added available.',
    imageUrl='https://i.etsystatic.com/11739919/r/il/f4ea55/3332041287/il_340x270.3332041287_6xzb.jpg',
    userId=1,
    rating=5,
    category='Accessories',
    franchise='Harry Potter'
  )

  masks = Product(
    name='Harry Potter-Themed Masks',
    price=8.00,
    description='Cotton pleated reversible face mask. Two looks; one mask. Features include: soft, stretchy elastic ear bands with an adjustable toggle. Machine washable.',
    imageUrl='https://i.etsystatic.com/26029693/r/il/6e45e6/2729063281/il_340x270.2729063281_piht.jpg',
    userId=1,
    rating=4.8,
    category='Accessories',
    franchise='Harry Potter'
  )

  charms = Product(
    name='Harry Potter Charms',
    price=13.56,
    description='Harry Potter charms for Pandora style bracelet',
    imageUrl='https://i.etsystatic.com/6476247/r/il/f7a9bc/3606046615/il_340x270.3606046615_66he.jpg',
    userId=1,
    rating=5,
    category='Jewelry',
    franchise='Harry Potter'
  )

  pillow = Product(
    name='Daily Prophet Stuffed Pillows',
    price=10.00,
    description='4 Wizarding newspaper prints available: Daily Prophet, Transfiguration Today, New York Ghost, WANTED Death Eaters. Great accent piece for any wizard, witch, or muggle! Stuffed pillows come completely sealed and filled, fabric is not removable (not a cover or case). The front of the pillow is the pattern you choose and the back is a solid, complementary color.',
    imageUrl='https://i.etsystatic.com/23526578/r/il/06e8af/3537235770/il_340x270.3537235770_7r7s.jpg',
    userId=1,
    rating=5,
    category='Accessories',
    franchise='Harry Potter'
  )

  applique = Product(
    name='Harry Potter Houses iron on applique',
    price=3.75,
    description='Set includes all 4 house badges, Gryffindor, Ravenclaw, Hufflepuff, and Slytherin. Appliqués are made from 100% cotton fabric and no-sew adhesive webbing.',
    imageUrl='https://i.etsystatic.com/5861715/r/il/78b847/3165938887/il_340x270.3165938887_9w0o.jpg',
    userId=1,
    rating=5,
    category='Apparel',
    franchise='Harry Potter'
  )

  shirt = Product(
    name='Hogwarts Shirt',
    price=13.00,
    description='Unisex T-shirt',
    imageUrl='https://i.etsystatic.com/29864097/c/912/725/557/70/il/53f202/3442980005/il_340x270.3442980005_97tb.jpg',
    userId=1,
    rating=4.6,
    category='Apparel',
    franchise='Harry Potter'
  )

  display = Product(
    name="Ollivander's Wand Display",
    price=69.99,
    description='Beautiful Wand Holder and storage and collector would admire!',
    imageUrl='https://i.etsystatic.com/21944939/r/il/ad8ee4/3483842867/il_340x270.3483842867_kwmh.jpg',
    userId=1,
    rating=5,
    category='Art',
    franchise='Harry Potter'
  )

  glasses = Product(
    name='Harry Potter Stemless Wine Glasses',
    price=14.40,
    description='Set of 4 Harry Potter Themed wine glasses.',
    imageUrl='https://i.etsystatic.com/30752867/r/il/dfeb8d/3179219522/il_340x270.3179219522_9435.jpg',
    userId=1,
    rating=5,
    category='Kitchen',
    franchise='Harry Potter'
  )

  bag = Product(
    name='Harry Potter 3 in 1 Bag',
    price=65.10,
    description='Made of premium leather and delicately stitched for sturdiness, this bag can be used as a purse, shoulder bag or even a wallet, a 3 in 1 optimized combination for all possible occasions!',
    imageUrl='https://i.etsystatic.com/33420685/r/il/ff720e/3598720663/il_340x270.3598720663_cn33.jpg',
    userId=1,
    rating=5,
    category='Accessories',
    franchise='Harry Potter'
  )

  board = Product(
    name='Harry Potter Inspired Cutting Board',
    price=40.00,
    description='Harry Potter Inspired Cutting Board | Personalized I Solemnly Swear My Cooking Is So Good Wood Cutting Board | Different Styles Available',
    imageUrl='https://i.etsystatic.com/14038614/c/2775/2206/59/11/il/472052/3503110048/il_340x270.3503110048_jp6z.jpg',
    userId=1,
    rating=5,
    category='Kitchen',
    franchise='Harry Potter'
  )

  db.session.add(watch_bands)
  db.session.add(masks)
  db.session.add(charms)
  db.session.add(pillow)
  db.session.add(applique)
  db.session.add(shirt)
  db.session.add(display)
  db.session.add(glasses)
  db.session.add(bag)
  db.session.add(board)

  db.session.commit()

def undo_products():
  db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
  db.session.commit()
