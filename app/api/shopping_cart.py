from flask import Blueprint, jsonify, request
from app.models import Product, User, ShoppingCart, CartItem, db
import json


cart_routes = Blueprint('shopping_cart', __name__)

@cart_routes.route('/<int:user_id>')
def shopping_cart(user_id):
  cart = ShoppingCart.query.filter(ShoppingCart.userId == user_id).first()
  if not cart:
    cart = ShoppingCart(
            id = len(ShoppingCart.query.all()) + 1,
            userId=user_id,
            total=0
    )
    db.session.add(cart)
    db.session.commit()
  
  cart = cart.to_dict()
  
  cartItems = CartItem.query.filter(CartItem.cartId == cart['id']).all()
  cartItems = [item.to_dict() for item in cartItems]

  newTotal = 0
  for item in cartItems:
    product = Product.query.get(item['productId'])
    product = product.to_dict()
    newTotal = newTotal + (product['price'] * item['quantity'])
  
  cart['total'] = newTotal
  return {
    'cart': cart,
    'cartItems': cartItems
  }


@cart_routes.route('/<int:user_id>/<int:product_id>', methods=['POST'])
def add_Item(user_id, product_id):
  data = request.json
  print("!!!!!!!!!! DATA!!!!!!!!!", data)
  cart = ShoppingCart.query.filter(ShoppingCart.userId == user_id).first()
  product = Product.query.filter(Product.id == product_id).first()
  
  if not cart:
    cart = ShoppingCart(
            userId=user_id,
            total=0
    )
    db.session.add(cart)
    db.session.commit()


  newCartItem = CartItem(
    productId=product_id,
    cartId=cart.id,
    quantity=data['quantity']
  )
  db.session.add(newCartItem)
  db.session.commit()

  cart = cart.to_dict()
  newItem = newCartItem.to_dict()

  cartItems = CartItem.query.filter(CartItem.cartId == cart['id']).all()

  newTotal = 0

  cartItems = [item.to_dict() for item in cartItems]
  for item in cartItems:
    product = Product.query.get(item['productId'])
    product = product.to_dict()
    newTotal = newTotal + (product['price'] * item['quantity'])
  
  cart['total'] = newTotal
  
  return {
    'cart': cart,
    'cartItems': cartItems
  }


@cart_routes.route("/update", methods=["PUT"])
def update_cart():  
  data = request.json
  item_id = data['itemId']
  newQuantity = data['quantity']
  cart_id = data['cartId']

  cart = ShoppingCart.query.get(cart_id)

  item = CartItem.query.get(item_id)
  item.quantity = newQuantity
  item = item.to_dict()

  db.session.commit()

  items = CartItem.query.filter(CartItem.cartId == cart_id).all()
  cartItems = [item.to_dict() for item in items]
  
  newTotal = 0
  for item in cartItems:
    product = Product.query.get(item['productId'])
    product = product.to_dict()
    newTotal = newTotal + (product['price'] * item['quantity'])
  cart = cart.to_dict()
  cart['total'] = newTotal
  
  return {
    'cart': cart,
    'cartItems': cartItems
  }






@cart_routes.route("/<int:product_id>/<int:cart_id>", methods=["DELETE"])
def delete_item(product_id, cart_id):
  cartItem = CartItem.query.filter(CartItem.productId == product_id).first()
  db.session.delete(cartItem)
  db.session.commit()

  cartItems = CartItem.query.filter(CartItem.cartId == cart_id)
  cartItems = [item.to_dict() for item in cartItems]

  return {"cartItems": cartItems}
