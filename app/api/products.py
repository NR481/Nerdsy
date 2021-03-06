from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from app.models import Comment, Product, db
from app.forms import AddProductForm
# from app.forms import EditProductForm

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def index():
  products = Product.query.all()
  return {'products': [product.to_dict() for product in products]}


@product_routes.route('/<int:id>/comments')
def get_comments(id):
  comments = Comment.query.filter(Comment.productId == id)
  return {'comments': [comment.to_dict() for comment in comments]}

@product_routes.route('/', methods=['POST'])
@login_required
def add_product():
  form = AddProductForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    product = Product(
      name=form.data['name'],
      price=form.data['price'],
      description=form.data['description'],
      imageUrl=form.data['imageUrl'],
      rating=form.data['rating'],
      category=form.data['category'],
      franchise=form.data['franchise'],
      userId=current_user.id
    )
    # print(product)

    db.session.add(product)
    db.session.commit()

    return product.to_dict()
  return form.errors


@product_routes.route('/<int:id>/', methods=['DELETE'])
@login_required
def delete_product(id):
  product = Product.query.get(id)
  db.session.delete(product)
  db.session.commit()
  return {"Delete":"Success"}


@product_routes.route('/<int:id>/', methods=['PUT'])
@login_required
def edit_product(id):
  product = Product.query.get(id)
  form = AddProductForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    product.name=form.data['name'],
    product.price=form.data['price'],
    product.description=form.data['description'],
    product.imageUrl=form.data['imageUrl'],
    product.rating=form.data['rating'],
    product.category=form.data['category'],
    product.franchise=form.data['franchise']
    db.session.commit()
    return product.to_dict()
  return form.errors

  
