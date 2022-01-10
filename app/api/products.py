from flask import Blueprint, jsonify
from app.models import Product

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def index():
  products = Product.query.all()
  return {product.id: [product.to_dict() for product in products]}
