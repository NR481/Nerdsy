from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms import SelectField, TextAreaField

class CommentForm(FlaskForm):
    comment = TextAreaField('comment', validators=[DataRequired()])
    rating = SelectField('rating', choices=[('1'),('2'),('3'),('4'),('5')])
