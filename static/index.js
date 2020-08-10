
// d3.csv("../Data/AllPlayerData.csv").then(function(tvData) {

//     console.log(tvData);
// });

// d3.json("/testing").then((data) =>{console.log(data)});
// fetch("testing").then((data) =>{console.log(data)});


function initTable() {
    d3.csv("../Data/AllPlayerData.csv").then(function(data){
        // console.log(data);
      var columnNames = ["Player", "PlayerID", "Pos", "Season", "Tm", "2P", "2P%", "2PA","3P","3P%", "3PA", "Age", "AST", "BLK", "DRB", "eFG%", "FG", "FG%", "FGA", "FT", "FT%", "FTA", "G", "GS", "MP", "ORB", "PF", "PTS", "Rk", "STL", "TOV", "TRB", "MVP"];
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
        $("#energy-table").DataTable({
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
            { title: "Rank" },
            { title: "Steals" },
            { title: "Turnovers" },
            { title: "Total Rebounds" },
            { title: "MVP" },
          ],
        });
      });
    })
  };



initTable();
// DataTable();

// console.log("Try This");
// $(document).ready( function () {
//     $('#energy-table').DataTable();
// } );