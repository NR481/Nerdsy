from flask import Blueprint, request
from flask_login import current_user, login_required
from app.forms import CommentForm
from app.models import db, Comment

comment_routes = Blueprint('comments', __name__, url_prefix='/comments')

@comment_routes.route('/', methods=['POST'])
@login_required
def add_comment():
  form = CommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    comment = Comment(
      comment=form.data['comment'],
      rating=form.data['rating'],
      productId=form.data['productId'],
      userId=current_user.id
    )

    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()
