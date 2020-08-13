import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy.sql import text  #ES import text to use SQL text directly
from sqlalchemy import create_engine, func


from flask import Flask, jsonify, render_template

connection_string = f"group5:Group5Project@nbastats2.c4lr0vlcqzd5.us-east-1.rds.amazonaws.com:5432/NBA_Stats"

engine = create_engine(f'postgresql://{connection_string}')

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

all_rookies_data = Base.classes.all_rookies

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

@app.route("/")
def welcome():
    
    return render_template('index.html')

@app.route("/roy.html")
def welcome2():
    
    return render_template('roy.html')

@app.route("/about.html")
def welcome3():
    
    return render_template('about.html')

@app.route("/scatter.html") #test route for scatterplot page
def welcome4():
    
    return render_template('scatter.html')

@app.route("/<season>/<xstat>/<ystat>")
def getdata(season,xstat,ystat):
    s = text(
        f"""SELECT "Player", "Tm","season", "{xstat}", "{ystat}", mvp_votes, rookie_votes
        FROM combined_data
        WHERE season=:season AND "Tm" !=:team """)
    conn = engine.connect()
    result = conn.execute(s, season=season, team='TOT').fetchall()
    print(result)
    return jsonify([dict(row) for row in result])

@app.route("/all_data")
def get_all_data():
    s = text(
        f"""SELECT *
        FROM combined_data
        WHERE "Tm" !=:team """)
    conn = engine.connect()
    result = conn.execute(s, team = "TOT").fetchall()
    # print(result)
    return jsonify([dict(row) for row in result])


@app.route("/all_rookies")
def all_rookies_table():
 
    s = text(
        f"""SELECT *
        FROM all_rookies
        """)
    conn = engine.connect()
    result = conn.execute(s).fetchall()

    return jsonify([dict(row) for row in result])

@app.route("/all_players_basic")
def get_all_players():
    s = text(
        f"""SELECT *
        FROM all_players
        WHERE "PTS" > 0
        """)
    conn = engine.connect()
    result = conn.execute(s).fetchall()
    # print(result)
    return jsonify([dict(row) for row in result])


if __name__ == '__main__':
    app.run(debug=True)