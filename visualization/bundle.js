(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Each of these functions should return an array with two elements, the first being the actual solution to the problem and the second being a count of the total number of operations calculated in the function

const stringSearch = (str, val) => {
  // return [true or false, number of calculations]
}

const sortedArrSearch = (arr, val) => {
  // how can we optimize a search if we know the array is sorted? Can we solve in O(log n)?
}

const binaryTreeSearch = () => {
  // recursively search a binary tree
}

// given an array and a target value, do two elements in the array sum to the value?
const pairSumNaive = (arr, sumVal) => {
  // Write a solution that solves in O(n^2)
}

const pairSumOptimized = (sortedArr, sumVal) => {
  // assume array passed here will be sorted. Can we solve in O(n)?
}

module.exports = {
  stringSearch,
  sortedArrSearch,
  pairSumNaive,
  pairSumOptimized
}

},{}],2:[function(require,module,exports){
var knownResults = {};

module.exports = {

  countChangeCombinations (money, coins) {
    let mem = 'money: '+ money +'coins: ' + coins.join('');
    if (knownResults[mem]) return knownResults[mem];
    if (money < 0 || !coins.length) return 0;
    if (money === 0) return 1;
    return knownResults[mem] = this.countChangeCombinations(money - coins[0], coins) + this.countChangeCombinations(money, coins.slice(1))
  },

  combinatorialPartitonsReduceToCoins (num) {
    function changeReduction (n) {
      return new Array(n).fill(0).map((e, i) => i + 1)
    }
    return this.countChangeCombinations(num, changeReduction(num))
  },

  knapsackProblem (set, target) {
    function subset (set, snoball){
      if (!set.length) {
        return false;
      } else if (set.some(n => snoball + n === target)){
        return true
      }
      for (var i = 0; i < set.length; i++){
        let now = set[i];
        let next = set.slice(0, i).concat(set.slice(i + 1));
        if (subset(next, snoball + now)) return true
      }
      return false
    }
    return subset(set, 0)
  },

  subsetSumReduceToKnapsack (set) {
    return this.knapsackProblem(set, 0)
  },

  partitionProblemReducedToKnapsack (set) {
    return this.knapsackProblem(set, set.reduce((a, b) => a + b) / 2)
  },

  partitionProblem (set) {
    function compare (arr, sum){
      return arr.reduce((a , b) => a + b) === sum;
    }

    function partition (arr, snowball) {
      if (!arr.length){
        return false
      }
      if (compare(arr, snowball) && arr.length !== set.length) {
        return true;
      }
      for (let i = 0; i < arr.length; i++) {
        let now = arr[i];
        let next = arr.slice(0, i).concat(arr.slice(i + 1));
        if (partition(next, snowball + now)) return true
      }
      return false
    }

    return partition(set, 0)
  },

  knapsackReduceToPartiton (set, target) {
    return this.partitionProblem(set.concat(target * 2 - set.reduce((a, b) => a + b)))
  },

}


},{}],3:[function(require,module,exports){
var algorithms = require('../Big-O-algorithms/algorithms.js');
var NPCMethods = require('../reductions/solution.js');

console.log('hello world')

},{"../Big-O-algorithms/algorithms.js":1,"../reductions/solution.js":2}]},{},[3]);
