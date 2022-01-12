from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, FileField, DecimalField
from wtforms.validators import DataRequired, Email, ValidationError


class EditProductForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    price = DecimalField('price', validators=[DataRequired()])
    description = TextAreaField('description')
    imageUrl = StringField('image url', validators=[DataRequired()])
    rating = IntegerField('rating')
    category = StringField('category')
    franchise = StringField('franchise')