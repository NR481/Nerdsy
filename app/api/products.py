from flask import Blueprint, jsonify, redirect, request
from app.models import Product, Comment
import json

product_routes = Blueprint('products', __name__, url_prefix="/products")

@product_routes.route('/')
def index():
  products = Product.query.all()
  return {'products': [product.to_dict() for product in products]}

@product_routes.route('/<int:id>/comments', methods=['GET','POST'])
def add_comment(id):
  comments = Comment.query.filter(comments.productId == id)
  print('COMMENTS:', comments)
  # test = request.args.get()
  # print('TEST:',test)
  return comments.to_dict()
