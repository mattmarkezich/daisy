__author__ = 'Matt'

from flask import render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
    PageTitle = "Labor Market Monitor (Demo)"
    PageSubTitle = "Washington Center for Equitable Growth"
    return render_template('index.html',
                           PageTitle=PageTitle,
                           PageSubTitle=PageSubTitle)
