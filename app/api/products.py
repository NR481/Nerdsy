from flask import Blueprint, jsonify
from app.models import Product
import json

product_routes = Blueprint('products', __name__, url_prefix="/products")

@product_routes.route('/')
def index():
  products = Product.query.all()
  return {product.id: [product.to_dict() for product in products]}
