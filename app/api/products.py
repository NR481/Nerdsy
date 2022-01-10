from flask import Blueprint, jsonify
from app.models import Product

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def index():
  products = Product.query.all()
  product_dict = []
  for item in products:
    product_dict.append(dict(item))

  print({'products': [product.to_dict()['id'] for product in products]})
  return {'products': [product.to_dict() for product in products]}
