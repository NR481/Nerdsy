from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError

class AddProductForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    price = IntegerField('price', validators=[DataRequired()])
    description = StringField('description')
    imageUrl = StringField('image url', validators=[DataRequired()])
    rating = IntegerField('rating')
    category = StringField('category')
    franchise = StringField('franchise')