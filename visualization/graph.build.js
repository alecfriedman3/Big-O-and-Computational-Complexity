var d3 = require('d3');

function buildGraphForAlgorithm(algorithm, inputs, color){
  let d3Data = inputs.map(ip => {
    let length;
    if (!Array.isArray(ip)){
      length = ip;
      ip = [ip];
    }
    let date = new Date();
    let solution = algorithm.apply(null, ip);
    let date2 = new Date();
    length = length || ip[0].length;
    let height = date2 - date < 2 ? solution[1] : date2 - date
    return [length, height];
  })
  // console.log(d3Data, 'd3 data-----------')
  var margin = {top: 20, right: 20, bottom: 30, left: 50}
  let canvas = d3.select('svg')
    .attr({ 'width': 800, 'height': 400 });
    // console.log(canvas, 'here lies canvas--------------')
    let yscale = d3.scale.linear()
      .domain([0, 250])
      //         d3.max(d3Data, function (d) {
      //   return d[1]
      // })])
      .range([400,0]);

    let xscale = d3.scale.linear()
      .domain([0, d3Data.length])
      .range([0, 800]);

    var line = d3.svg.line()
      .x(function(d) { return xscale(d3Data.map(e => e[0]).indexOf(d[0])); })
      .y(function(d) { return yscale(d[1]); })

    var emptyLine = d3.svg.line()
      .x(function(d) { return xscale(d3Data.map(e => e[0]).indexOf(d[0])); })
      .y(400)

    canvas.selectAll("dot")
    .data(d3Data).enter()
    .append("circle")
    .attr("r", 2)
    .attr("fill", color)
    .attr("cx", function(d) {
      /*Callback Function*/
      return xscale(d[0])
    })
    .attr("cy", function(d) {
      /*Callback Function*/
      return yscale(d[1])
    })

}
function generateIncreasingNumbers (n){
  var arr = [1];
  for (var i = 1; i < n; i++){
    arr.push(arr[i - 1] + Math.floor(Math.random() * 100))
  }
  return arr;
}

function generateRandomNumbers (n) {
  var arr = [1];
  for (var i = 1; i < n; i++){
    var rand = Math.floor(Math.random() * n) * Math.floor(Math.random() * n)
    while (arr.indexOf(rand) !== -1 || rand === 0){
      rand = Math.floor(Math.random() * n) * Math.floor(Math.random() * n)
    }
    arr.push(rand)
  }
  return arr
}

module.exports = {
  generateRandomNumbers,
  generateIncreasingNumbers,
  buildGraphForAlgorithm
}
