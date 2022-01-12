from flask import Blueprint, request
from app.forms import SearchForm
from app.models.product import Product

search_routes = Blueprint('search', __name__, url_prefix='/search')

@search_routes.route('/', methods=['POST'])
def search():
  form = SearchForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  print(form.data)
  if form.validate_on_submit():
    query = form.data['query']
    result = Product.query.filter(Product.name.ilike(f'%{query}%')).all()

    return {'products': [item.to_dict() for item in result]}
