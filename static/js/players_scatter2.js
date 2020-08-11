console.log("here")
var myDiv = d3.select("#myDiv")

season = '2009-10'
xstat = 'MP'
ystat = 'WS'
var PlayerDataURL = `${season}/${xstat}/${ystat}`
d3.json(PlayerDataURL).then( PlayerData => {
    console.log(data);
    var PlayerName = PlayerData.map(Player => Player["Player"]);
    var x_stat = PlayerData.map(Player => Player[xstat]);
    var y_stat = PlayerData.map(Player => Player[ystat]);


    console.log(PlayerName, x_stat, y_stat)

    colorMap = PlayerData.map(function(Player){
        if (Player["mvp_votes"] != null){
            return "blue"
        }
        else {
            return "gray"
        }

    })
    console.log(colorMap)

    var trace1 = {
        x: x_stat,
        y: y_stat,
        mode: 'markers',
        type: 'scatter',
        name: 'Team A',
        text: PlayerName,
        marker: { size: 12,
                  color: colorMap }
    };

//var trace2 = {
//  x: [1.5, 2.5, 3.5, 4.5, 5.5],
//  y: [4, 1, 7, 1, 4],
//  mode: 'markers',
//  type: 'scatter',
//  name: 'Team B',
//  text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
//  marker: { size: 12 }
//};

    var data = [ trace1 ];

var layout = {
//  xaxis: {
//    range: [ 0.75, 5.25 ]
//  },
//  yaxis: {
//    range: [0, 8]
//  },
  title:'Data Labels Hover',
  hovermode:'closest'
};

    Plotly.newPlot('myDiv', data,layout);
})