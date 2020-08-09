import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
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

@app.route("/testing")
def all_rookies_table():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all Power Plants depending on filter"""
    
    results3 = session.query(all_rookies_data.Player,all_rookies_data.Season, all_rookies_data.Tm, all_rookies_data.Age, all_rookies_data.PTS).all()
    # .filter_by(primary_fuel='Gas').all()
    # for row in results3:
    #     print(f'Plant Name: {row.name} ||| Capacity (MW): {row.capacity_mw} ||| Fuel Type: {row.primary_fuel}')

    session.close()


    # Failed Attempt to return all results

    all_rows = []
    for Player, Season, Tm, Age, PTS in results3:
        test_dict = {}
        test_dict["Player"] = Player
        test_dict["Season"] = Season
        test_dict["Tm"] = Tm
        test_dict["Age"] = int(Age)
        test_dict["PTS"] = int(PTS)

        all_rows.append(test_dict)
    # unique_list = list(np.ravel(results3))
    # print(all_rows)


    return jsonify(all_rows)

if __name__ == '__main__':
    app.run(debug=True)