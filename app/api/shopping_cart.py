from flask import Blueprint, jsonify
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
    newTotal = newTotal + product['price']
  
  cart['total'] = newTotal
  return {
    'cart': cart,
    'cartItems': cartItems
  }


@cart_routes.route('/<int:user_id>/<int:product_id>', methods=['GET', 'POST'])
def add_Item(user_id, product_id):
  
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
    quantity=1
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
    newTotal = newTotal + product['price']
  
  cart['total'] = newTotal
  
  return {
    'cart': cart,
    'cartItems': cartItems
  }
