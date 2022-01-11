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

@comment_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_comment(id):
  form = CommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  edited_comment = Comment.query.get(id)
  print(form.data)

  if form.validate_on_submit():
    edited_comment.comment = form.data['comment']
    edited_comment.rating = form.data['rating']
    edited_comment.productId = form.data['productId']
    edited_comment.userId = current_user.id

    db.session.commit()
    return edited_comment.to_dict()
