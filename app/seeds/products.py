from sqlalchemy.sql.elements import CollectionAggregate
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

  clock = Product(
    name='Star Wars Clock',
    price=28.60,
    description='Gift for any occasion - be sure your friend, colleague, boyfriend or girlfriend will be sincerely happy about Vinyl Record Wall Clock.',
    imageUrl='https://i.etsystatic.com/22139461/r/il/7018c6/2401264104/il_340x270.2401264104_52i3.jpg',
    userId=1,
    rating=5,
    category='Decor',
    franchise='Star Wars'
  )

  spatulas = Product(
    name='Star Qars inspired wooden spoon',
    price=10.65,
    description='A perfect novelty gift for any star wars fan Available in any combination of picture and wording which is burnt into the wood.',
    imageUrl='https://i.etsystatic.com/25700966/r/il/587255/3287799072/il_340x270.3287799072_jbbx.jpg',
    userId=1,
    rating=5,
    category='Kitchen',
    franchise='Star Wars'
  )

  wookie = Product(
    name='Star Wars Chewbacca T-Shirt',
    price=10.29,
    description='Unisex t shirt fits like a well-loved favorite, featuring a crew neck, short sleeves and designed with superior airlume combed and ring-spun cotton that acts as the best blank canvas for printing.',
    imageUrl='https://i.etsystatic.com/23695102/c/1313/1039/810/223/il/04d50d/3322689556/il_340x270.3322689556_tt6e.jpg',
    userId=1,
    rating=5,
    category='Apparel',
    franchise='Star Wars'
  )

  lamp = Product(
    name='Star Wars Lamp',
    price=89.00,
    description='For all Star Wars Fans, this is a must-have !!!!',
    imageUrl='https://i.etsystatic.com/14967431/r/il/8cfad6/3392345278/il_340x270.3392345278_4xsf.jpg',
    userId=1,
    rating=5,
    category='Decor',
    franchise='Star Wars'
  )

  coasters = Product(
    name='Star Wars Coaster Holder',
    price=40.00,
    description='Laser engraved coasters made of 1/4" thick cork material that is 3.5" diameter. These are made from 100% recycled material! Cork is a naturally absorbent material which makes it the perfect material for coasters. All designs are custom made in house and laser engraved in small batches.',
    imageUrl='https://i.etsystatic.com/16254937/c/3000/2382/0/352/il/05a43b/1368015984/il_340x270.1368015984_aih1.jpg',
    userId=1,
    rating=5,
    category='Decor',
    franchise='Star Wars'
  )

  ring = Product(
    name='Thor Hammer Mjolnir Ring Holder',
    price=15.00,
    description='Only the mightiest rings are worthy of Mjolnir. While adorning your desk, sink, or bedside table, Thor will keep your rings safe with the power of Mjolnir.',
    imageUrl='https://i.etsystatic.com/33115157/r/il/265120/3607297711/il_340x270.3607297711_2h06.jpg',
    userId=1,
    rating=5,
    category='Jewelry',
    franchise='Marvel'
  )

  socks = Product(
    name='Marvel Socks',
    price=9.99,
    description='Iron man, captain America spider-man Thor and more. Great for groomsmen as gifts or just to match. Look great in photos.',
    imageUrl='https://i.etsystatic.com/20422276/r/il/8b3530/3537110881/il_340x270.3537110881_7eww.jpg',
    userId=1,
    rating=5,
    category='Apparel',
    franchise='Marvel'
  )

  box = Product(
    name='Marvel Mystery Box',
    price=28.33,
    description='Thor Crate is a mystery box bringing you an amazing shipment from the Marvel universe full of exclusive Marvel collectibles, gear and more, much of which you won’t find in stores.',
    imageUrl='https://i.etsystatic.com/25723913/r/il/f47a80/3256710000/il_340x270.3256710000_kg6b.jpg',
    userId=1,
    rating=5,
    category='Misc',
    franchise='Marvel'
  )

  sweater = Product(
    name='Wanda Vision shirt',
    price=9.99,
    description='Unisex style t-shirts that work perfectly for both men and women.',
    imageUrl='https://i.etsystatic.com/6014486/r/il/1653c9/3583119061/il_340x270.3583119061_30h3.jpg',
    userId=1,
    rating=5,
    category='Apparel',
    franchise='Marvel'
  )

  busts = Product(
    name='Marvel Busts (Any Color)',
    price=7.00,
    description='Marvel busts! These can come as a solid color, or painted! Default height is 2 1/2", but can make it larger per request. Condition is "New". Shipped with USPS Parcel Select Ground. Marvel.',
    imageUrl='https://i.etsystatic.com/27484735/c/783/622/73/0/il/a18c30/3018798845/il_340x270.3018798845_nq3g.jpg',
    userId=1,
    rating=5,
    category='Decor',
    franchise='Marvel'
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
  db.session.add(clock)
  db.session.add(spatulas)
  db.session.add(wookie)
  db.session.add(lamp)
  db.session.add(coasters)
  db.session.add(ring)
  db.session.add(socks)
  db.session.add(box)
  db.session.add(sweater)
  db.session.add(busts)

  db.session.commit()

def undo_products():
  db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
  db.session.commit()
