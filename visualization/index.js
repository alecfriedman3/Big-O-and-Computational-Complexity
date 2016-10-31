var algorithms = require('../Big-O-algorithms/algorithms.solutions.js');
var NPCMethods = require('../reductions/solution.js');
var d3 = require('d3');

function buildGraphForAlgorithm(algorithm, inputs){
  let d3Data = inputs.map(ip => {
    let date = new Date();
    let solution = algorithm.apply(null, ip);
    let date2 = new Date();
    let length = ip[0].length;
    let height = date2 - date < 2 ? solution[1] : date2 - date
    return [length, height];
  })
  console.log(d3Data, 'd3 data-----------')
  var margin = {top: 20, right: 20, bottom: 30, left: 50}
  let canvas = d3.select('svg')
    .attr({ 'width': 1080, 'height': 800 });

    let yscale = d3.scale.linear()
      .domain([0, d3.max(d3Data.map(o => o[1]))])
      .range([720,0]);

    let xscale = d3.scale.linear()
      .domain([0, d3Data.length])
      .range([0, 1080]);

    var line = d3.svg.line()
      .x(function(d) { return xscale(d3Data.map(e => e[0]).indexOf(d[0])); })
      .y(function(d) { return yscale(d[1]); })

    var emptyLine = d3.svg.line()
      .x(function(d) { return xscale(d3Data.map(e => e[0]).indexOf(d[0])); })
      .y(800)

    canvas.selectAll("dot")
    .data(d3Data).enter()
    .append("circle")
    .attr("r", 1)
    .attr("fill", "red")
    .attr("cx", function(d) {
      /*Callback Function*/
      return xscale(d[0])
    })
    .attr("cy", function(d) {
      /*Callback Function*/
      return yscale(d[1])
    })

}

eventListener.on('stringSearch', function (){
  console.log('string Searching!')
  let inputs = [];
  for (var i = 1; i < 1000; i++){
    let needle = String.fromCharCode(Math.random() * 94 + 32);
    inputs.push([new Array(i).fill('').map((el, i) => {
      let staged = String.fromCharCode(Math.random() * 94 + 32);
      if (staged === needle && i < inputs.length / 2){
        while (staged === needle){
          staged = String.fromCharCode(Math.random() * 94 + 32);
        }
      }
      return staged
    }).join(''), needle ])
  }
  console.log(inputs)
  buildGraphForAlgorithm(algorithms.stringSearch, inputs)
})

// eventListener.on('sortedArrSearch', function (){
//   buildGraphForAlgorithm(algorithms.sortedArrSearch, inputs)
// })


console.log('hello world')
