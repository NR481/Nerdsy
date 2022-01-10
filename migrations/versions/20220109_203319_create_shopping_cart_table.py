"""create shopping_cart table

Revision ID: 156a1eebe6c1
Revises: 452206574d60
Create Date: 2022-01-09 20:33:19.580303

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '156a1eebe6c1'
down_revision = '452206574d60'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('shopping_carts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('total', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('shopping_carts')
    # ### end Alembic commands ###