import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy.sql import text  #ES import text to use SQL text directly
from sqlalchemy import create_engine, func, inspect


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

@app.route("/mvp.html")
def welcome3():
    inspector = inspect(engine)
    stats_list = inspector.get_columns('combined_data')
    stats = [stat["name"].strip() for stat in stats_list if stat["name"].strip() not in ['Player', 'season','Tm','PlayerID','Pos']]    
    s = text(
        f"""SELECT DISTINCT "season"
        FROM combined_data """)
    conn = engine.connect()
    seasons = conn.execute(s)
    print(seasons)
    return render_template('mvp.html', seasons=seasons,stats=stats, award='mvp')
    # return render_template('')


@app.route("/scatter.html") #test route for scatterplot page
def welcome5():
    inspector = inspect(engine)
    stats_list = inspector.get_columns('combined_data')
    stats = [stat["name"].strip() for stat in stats_list if stat["name"].strip() not in ['Player', 'season','Tm','PlayerID','Pos']]    
    s = text(
        f"""SELECT DISTINCT "season"
        FROM combined_data """)
    conn = engine.connect()
    seasons = conn.execute(s)
    print(seasons)
    return render_template('scatter.html', seasons=seasons,stats=stats)


@app.route("/<award>/<season>/<xstat>/<ystat>")
def getdata(award,season,xstat,ystat):
    if award == "mvp":
        s = text(
            f"""SELECT "Player", "Tm","season", "{xstat}", "{ystat}", mvp_votes, rookie_votes
            FROM combined_data
            WHERE season=:season AND "Tm" !=:team """)
    elif award == "roy":
        s = text(
            f"""SELECT "Player", "Tm","season", "{xstat}", "{ystat}", mvp_votes, rookie_votes
            FROM (
                select combined_data.* from combined_data
                join all_rookies
                on all_rookies."Player" = combined_data."Player" AND all_rookies."Season" = combined_data."season" AND all_rookies."Tm" = combined_data."Tm"
            ) as temp
            WHERE season=:season AND "Tm" !=:team """)
    
    
    conn = engine.connect()
    result = conn.execute(s, season=season, team='TOT').fetchall()

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


@app.route("/roy_predictions")
def get_roy_predictions():
    s = text(
        f"""SELECT *
        FROM roy_predictions
        order by  "season" desc, "Player" asc; 
        """)
    conn = engine.connect()
    result = conn.execute(s).fetchall()
    # print(result)
    return jsonify([dict(row) for row in result])

@app.route("/roy_predictions/<season>")
def get_roy_predictions_season(season):
    s = text(
        f"""SELECT *
        FROM roy_predictions
        WHERE season=:season
        order by "season" desc, "Player" asc; 
        """)
    conn = engine.connect()
    result = conn.execute(s, season=season).fetchall()
    # print(result)
    return jsonify([dict(row) for row in result])

# Used for MVP Page DataTables
@app.route("/mvp_predictions")
def get_mvp_predictions():
    s = text(
        f"""SELECT *
        FROM all_players_model_pred
        order by  "season" desc, "Player" asc; 
        """)
    conn = engine.connect()
    result = conn.execute(s).fetchall()
    # print(result)
    return jsonify([dict(row) for row in result])

@app.route("/mvp_predictions/<season>/<xstat>/<ystat>")
def get_mvp_predictions_season(season,xstat,ystat):
    s = text(
        f"""SELECT DISTINCT combined_data."Player", combined_data."Tm",combined_data."season", combined_data."{xstat}", combined_data."{ystat}", combined_data.mvp_votes,
CASE
    WHEN mvp_predictions."Player" IS NOT NULL THEN 1
    ELSE 0
END AS mvp_predicted
FROM combined_data
LEFT JOIN mvp_predictions
ON mvp_predictions."Player" = combined_data."Player" AND mvp_predictions."season" = combined_data."season" AND mvp_predictions."Tm" = combined_data."Tm"
WHERE combined_data."season"=:season AND combined_data."Tm" !=:team """)
    
    conn = engine.connect()
    result = conn.execute(s, season=season, team='TOT').fetchall()

    return jsonify([dict(row) for row in result])


if __name__ == '__main__':
    app.run(debug=True)