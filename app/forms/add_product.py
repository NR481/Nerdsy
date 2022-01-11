from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired

class AddProductForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    price = IntegerField('price', validators=[DataRequired()])
    description = TextAreaField('description')
    imageUrl = StringField('image url', validators=[DataRequired()])
    rating = IntegerField('rating')
    category = StringField('category')
    franchise = StringField('franchise')