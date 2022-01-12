from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, DecimalField
from wtforms.validators import DataRequired

class AddProductForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    price = DecimalField('price', validators=[DataRequired()])
    description = TextAreaField('description')
    imageUrl = StringField('image url', validators=[DataRequired()])
    rating = IntegerField('rating')
    category = StringField('category')
    franchise = StringField('franchise')