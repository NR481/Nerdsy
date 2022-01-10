from flask import Blueprint, jsonify
from app.models import Product
import json

product_routes = Blueprint('products', __name__, url_prefix="/products")

@product_routes.route('/')
def index():
  products = Product.query.all()
  all_products = [
    {
      "id": item.id,
      "name": item.name,
      "price": float(item.price),
      "description": item.description,
      "imageUrl": item.imageUrl,
      "rating": item.rating,
      "category": item.category,
      "franchise": item.franchise,
      "userId": item.userId
    }
    for item in products
  ]
  return jsonify( all_products )
