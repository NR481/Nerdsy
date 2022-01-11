from flask import Blueprint, jsonify
from app.models import Product, User, ShoppingCart, CartItem
import json


cart_routes = Blueprint('shopping_cart', __name__, url_prefix="/shopping-carts")

@cart_routes('/:user_id')
def shopping_cart(user_id):
  cart = ShoppingCart.query.filter(userId=user_id).all()
  cartItems = CartItem.query.filter(cartId=cart.id).all()
  return "hello"


@cart_routes('/:user_id/:product_id')
def add_Item(user_id, product_id):
  cart = ShoppingCart.query.filter(userId == user_id).first()
  product = Product.query.filter(id == product_id).first()
  
  if not cart:
    cart = ShoppingCart(
            userId=user_id
            total=product.price
    )

  newCartItem = CartItem(
    productId=product_id
    cartId=cart.id
    quantity=1
  )

  cartItems = CartItem.query.filter(cartId == cart.id).all()

  total = 0

  cartItems = [item.to_dict() for item in cartItems]
  for item in cartItems:
    
