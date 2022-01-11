from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from app.models import Comment, Product, db
from app.forms import AddProductForm

product_routes = Blueprint('products', __name__, url_prefix="/products")

@product_routes.route('/')
def index():
  products = Product.query.all()
  return {'products': [product.to_dict() for product in products]}


@product_routes.route('/<int:id>/comments', methods=['GET','POST'])
def add_comment(id):
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

