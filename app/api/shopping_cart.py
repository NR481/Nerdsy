from flask import Blueprint, jsonify
from app.models import Product, User, ShoppingCart
import json


cart_routes = Blueprint('shopping_cart', __name__, url_prefix="/shopping-carts")

@cart_routes('/:user_id')
def shopping_cart(user_id):
  cart = ShoppingCart.query.get(user_id)
  return cart.to_dict()
