from flask import Blueprint
from app.models import Product

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def index():
  products = Product.query.all()
  return products.to_dict()
