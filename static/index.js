// Index HTML Page

function initTable() {
    d3.json("/all_players_basic").then(function(data){
        console.log(data);
      var columnNames = ["Player", "PlayerID", "Pos", "season", "Tm", "2P", "2P%", "2PA","3P","3P%", "3PA", "Age", "AST", "BLK", "DRB", "eFG%", "FG", "FG%", "FGA", "FT", "FT%", "FTA", "G", "GS", "MP", "ORB", "PF", "PTS", "STL", "TOV", "TRB"];
      const redux = (array) =>
        array.map((o) =>
          columnNames.reduce((acc, curr) => {
            acc[curr] = o[curr];
            return acc;
          }, {})
        );
  
      var almostTableData = redux(data);
  
      var tableData = almostTableData.map(Object.values);
  
      $(document).ready(() => {
        $("#all-players-table").DataTable({
          "scrollX": true,
          data: tableData,
          columns: [
            { title: "Player" },
            { title: "PlayerID" },
            { title: "Position" },
            { title: "Season" },
            { title: "Team" },
            { title: "2 Pointer Scored" },
            { title: "2 Pointer %" },
            { title: "2 Point Attempts" },
            { title: "3 Pointer Scored" },
            { title: "3 Pointer %" },
            { title: "3 Point Attempts" },
            { title: "Age" },
            { title: "Assist" },
            { title: "Block" },
            { title: "Defensive Rebound" },
            { title: "eFG%" },
            { title: "FG" },
            { title: "FG%" },
            { title: "FG Attempts" },
            { title: "FT" },
            { title: "FT%" },
            { title: "FT Attempts" },
            { title: "Games Played" },
            { title: "Games Started" },
            { title: "Minutes Played" },
            { title: "Offensive Rebound" },
            { title: "Personal Fouls" },
            { title: "Points Scored" },
            { title: "Steals" },
            { title: "Turnovers" },
            { title: "Total Rebounds" },
          ],
        });
      });
    })
  };



initTable();

function initTable2() {
  d3.json("/all_rookies").then(function(data){
      console.log(data);
    var columnNames = ["Player",  "Tm", "Age", "Yrs", "G", "MP", "FG", "FGA", "3P", "3PA", "FT", "FTA", "ORB", "TRB", "AST", "STL", "BLK", "TOV", "PF", "PTS", "FG%", "3P%", "FT%", "MP (AVG)", "PTS (AVG)", "TRB (AVG)", "AST (AVG)", "Season"];
    const redux = (array) =>
      array.map((o) =>
        columnNames.reduce((acc, curr) => {
          acc[curr] = o[curr];
          return acc;
        }, {})
      );

    var almostTableData = redux(data);

    var tableData = almostTableData.map(Object.values);

    $(document).ready(() => {
      $("#all-rookies-table").DataTable({
        "scrollX": true,
        data: tableData,
        columns: [
          { title: "Player" },
          { title: "Team" },
          { title: "Age" },
          { title: "Yrs" },
          { title: "Games Played" },
          { title: "Minutes Played" },
          { title: "Field Goals Scored" },
          { title: "Field Goal Attempts" },
          { title: "3 Pointer Scored" },
          { title: "3 Point Attempts" },
          { title: "Free Throws Made" },
          { title: "Free Throw Attempts" },
          { title: "Offensive Rebounds" },
          { title: "Total Rebounds" },
          { title: "Assists" },
          { title: "Steals" },
          { title: "Blocks" },
          { title: "Turnovers" },
          { title: "Personal Fouls" },
          { title: "Points Scored" },
          { title: "Field Goal %" },
          { title: "3 Pointer %" },
          { title: "Free Throw %" },
          { title: "Average Minutes Played (Per Game)" },
          { title: "Average Points Scored (Per Game)" },
          { title: "Average Rebounds (Per Game)" },
          { title: "Average Assists (Per Game)" },
          { title: "Season" },
        ],
      });
    });
  })
};

initTable2();


function initTable3() {
  d3.json("/roy_predictions").then(function(data){
      console.log(data);
      var columnNames = ["model", "Player", "season", "Tm",  "Pos",  "Age", "G", "MP", "2P", "2P%", "2PA","3P","3P%", "3PA", "AST", "BLK", "DRB", "eFG%", "FG%", "FGA", "FT", "FT%", "FTA", "GS", "ORB", "PF", "PTS", "STL", "TOV", "TRB", "PER", "TS%", "3PAr", "FTr", "ORB%", "DRB%", "TRB%", "AST%", "STL%", "BLK%", "TOV%", "USG%", "OWS", "DWS", "WS", "WS48", "OBPM", "DBPM", "BPM", "VORP", "rookie_votes"];
    const redux = (array) =>
      array.map((o) =>
        columnNames.reduce((acc, curr) => {
          acc[curr] = o[curr];
          return acc;
        }, {})
      );

    var almostTableData = redux(data);

    var tableData = almostTableData.map(Object.values);

    $(document).ready(() => {
      $("#roy_prediction").DataTable({
        data: tableData,
        "scrollX": true,
        columns: [
          { title: "Model" },
          { title: "Player" },
          { title: "Season" },
          { title: "Team" },
          { title: "Position" },
          { title: "Age" },
          { title: "Games Played" },
          { title: "Minutes Played" },
          { title: "2 Point Made" },
          { title: "2 Point %" },
          { title: "2 Point Attempts" },
          { title: "3 Pointer Scored" },
          { title: "3 Point %" },
          { title: "3 Point Attempts" },
          { title: "Assists" },
          { title: "Blocks" },
          { title: "Defensive Rebound" },
          { title: "eFG%" },
          { title: "FG%" },
          { title: "FG Attempts" },
          { title: "FT" },
          { title: "FT%" },
          { title: "FT Attempts" },
          { title: "Games Started" },
          { title: "Offensive Rebounds" },
          { title: "Personal Fouls" },
          { title: "Points Scored" },
          { title: "Steals" },
          { title: "Turnovers" },
          { title: "Total Rebounds" },
          { title: "Player Efficiency Rating" },
          { title: "True Scoring %" },
          { title: "3PAr" },
          { title: "FTr" },
          { title: "Offensive Rebound Percentage" },
          { title: "Defensive Rebound Percentage" },
          { title: "Total Rebound Percentage" },
          { title: "Assist Percentage" },
          { title: "Steal Percentage" },
          { title: "Block Percentage" },
          { title: "Turnover Percentage" },
          { title: "Player Usage Percentage" },
          { title: "Offensive Win Shares" },
          { title: "Defensive Win Shares" },
          { title: "Win Shares" },
          { title: "Win Shares per 48 Minutes" },
          { title: "Offensive +/-" },
          { title: "Defensive +/-" },
          { title: "Overall +/-" },
          { title: "Value Over Replacement Player (VORP)" },
          { title: "ROY Votes" },
        ],
      });
    });
  })
};
initTable3();


function initTable4() {
  d3.json("/mvp_predictions").then(function(data){
      console.log(data);
      
      var columnNames = ["model", "Player", "season", "Tm",  "Pos",  "Age", "G", "MP", "2P", "2P%", "2PA","3P","3P%", "3PA", "AST", "BLK", "DRB", "eFG%", "FG%", "FGA", "FT", "FT%", "FTA", "GS", "ORB", "PF", "PTS", "STL", "TOV", "TRB", "PER", "TS%", "3PAr", "FTr", "ORB%", "DRB%", "TRB%", "AST%", "STL%", "BLK%", "TOV%", "USG%", "OWS", "DWS", "WS", "WS48", "OBPM", "DBPM", "BPM", "VORP", "mvp_votes"];
    const redux = (array) =>
      array.map((o) =>
        columnNames.reduce((acc, curr) => {
          acc[curr] = o[curr];
          return acc;
        }, {})
      );

    var almostTableData = redux(data);

    var tableData = almostTableData.map(Object.values);

    $(document).ready(() => {
      $("#mvp_prediction").DataTable({
        data: tableData,
        "scrollX": true,
        columns: [
          { title: "Model" },
          { title: "Player" },
          { title: "Season" },
          { title: "Team" },
          { title: "Position" },
          { title: "Age" },
          { title: "Games Played" },
          { title: "Minutes Played" },
          { title: "2 Point Made" },
          { title: "2 Point %" },
          { title: "2 Point Attempts" },
          { title: "3 Pointer Scored" },
          { title: "3 Point %" },
          { title: "3 Point Attempts" },
          { title: "Assists" },
          { title: "Blocks" },
          { title: "Defensive Rebound" },
          { title: "eFG%" },
          { title: "FG%" },
          { title: "FG Attempts" },
          { title: "FT" },
          { title: "FT%" },
          { title: "FT Attempts" },
          { title: "Games Started" },
          { title: "Offensive Rebounds" },
          { title: "Personal Fouls" },
          { title: "Points Scored" },
          { title: "Steals" },
          { title: "Turnovers" },
          { title: "Total Rebounds" },
          { title: "Player Efficiency Rating" },
          { title: "True Scoring %" },
          { title: "3PAr" },
          { title: "FTr" },
          { title: "Offensive Rebound Percentage" },
          { title: "Defensive Rebound Percentage" },
          { title: "Total Rebound Percentage" },
          { title: "Assist Percentage" },
          { title: "Steal Percentage" },
          { title: "Block Percentage" },
          { title: "Turnover Percentage" },
          { title: "Player Usage Percentage" },
          { title: "Offensive Win Shares" },
          { title: "Defensive Win Shares" },
          { title: "Win Shares" },
          { title: "Win Shares per 48 Minutes" },
          { title: "Offensive +/-" },
          { title: "Defensive +/-" },
          { title: "Overall +/-" },
          { title: "Value Over Replacement Player (VORP)" },
          { title: "MVP Votes" },
        ],
      });
    });
  })
};
initTable4();