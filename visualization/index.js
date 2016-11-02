var algorithms = require('../Big-O-algorithms/algorithms.solutions.js');
var reductions = require('../reductions/reductions.js');
var graph = require('./graph.build.js');


eventListener.on('stringSearch', function (){
  let inputs = [];
  for (var i = 1; i < 20; i++){
    let needle = String.fromCharCode(Math.random() * 94 + 32);
    inputs.push([new Array(i).fill('').map((el, j) => {
      let staged = String.fromCharCode(Math.random() * 94 + 32);
      if (staged === needle && j < (inputs.length + inputs.length / 2 )/ 2){
        while (staged === needle){
          staged = String.fromCharCode(Math.random() * 94 + 32);
        }
      }
      return staged
    }).join(''), needle ])
  }
  graph.buildGraphForAlgorithm(algorithms.stringSearch, inputs, 'red')
})

eventListener.on('sortedArrSearch', function (){
  let inputs = [];
  for (var i = 1; i < 20; i++) {
    let array = graph.generateIncreasingNumbers(i)
    inputs.push([array, array[Math.floor(array.length / 2)] + 1])
  }
  graph.buildGraphForAlgorithm(algorithms.sortedArrSearch, inputs, 'blue')
})

eventListener.on('pairSumNaive', function (){
  let inputs = [];
  for (var i = 1; i < 20; i++) {
    let array = graph.generateIncreasingNumbers(i);
    let num = 0;
    inputs.push([array, num])
  }
  graph.buildGraphForAlgorithm(algorithms.pairSumNaive, inputs, 'purple')
})

eventListener.on('stairStep', function (){
  let inputs = new Array(20).fill(0).map((el, id) => id + 1);
  graph.buildGraphForAlgorithm(algorithms.stairStep, inputs, 'green')
})

// eventListener.on('coinChangeProblem', function (){
//   let inputs = [[[1, 2], 4],
// [[5, 2, 3], 10],
// [[5, 7], 11],
// [[1, 5, 10, 25], 61],
// [[8, 12, 13, 94, 27], 572]];
//   // for (var i = 1; i < 5; i++) {
//   //   let array = graph.generateRandomNumbers(i);
//   //   let num = Math.floor(Math.random() * Math.max.apply(null, array) * 5);
//   //   inputs.push([array, num])
//   // }
//   graph.buildGraphForAlgorithm(reductions.countChangeCombinations.bind(reductions), inputs, 'green')
// })


