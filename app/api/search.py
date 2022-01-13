from flask import Blueprint, request
from app.forms import SearchForm
from app.models.product import Product

search_routes = Blueprint('search', __name__, url_prefix='/search')

@search_routes.route('/', methods=['POST'])
def search():
  form = SearchForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  results = []
  if form.validate_on_submit():
    query = form.data['query']
    result1 = Product.query.filter(Product.name.ilike(f'%{query}%')).all()
    results.append(result1)
    result2 = Product.query.filter(Product.description.ilike(f'%{query}%')).all()
    results.append(result2)
    result3 = Product.query.filter(Product.category.ilike(f'%{query}%')).all()
    results.append(result3)
    result4 = Product.query.filter(Product.franchise.ilike(f'%{query}%')).all()
    results.append(result4)
    flat_results = [item for sublist in results for item in sublist]

    return {'products': [item.to_dict() for item in set(flat_results)]}
