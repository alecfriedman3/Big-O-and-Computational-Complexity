
// countChange takes a value, and an array of coins, and finds the total number of combinations it takes to make change for the value with your given coin values
var knownResults = {};

var countChange = function(money, coins) {
  let mem = 'money: '+ money +'coins: ' + coins.join('');
  if (knownResults[mem]) return knownResults[mem];
  if (money < 0 || !coins.length) return 0;
  if (money === 0) return 1;
  return knownResults[mem] = countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
}


// In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition.

// For example, 4 can be partitioned in five distinct ways:

// 4, 3 + 1, 2 + 2, 2 + 1 + 1, 1 + 1 + 1 + 1.

// write a helper function which `reduces` the partitionsOfNum problem into some instance of the coinChange problem. Our partitions problem is really just a special case of countChange

const partitionsOfNum = function (num) {
  function changeReduction (n) {
    return new Array(n).fill(0).map((e, i) => i + 1)
  }
  return countChange(num, changeReduction(num))
}



const knapsackProblem = function (set, target) {
  // can we find a subset of any length which sums to 0? Just code out a naive approach. What do you think the runtime complexity of this problem would be?
  function subset (set, snoball){
    if (!set.length) {
      return false;
    } else if (set.some(n => snoball + n === target)){
      return true
    }
    for (var i = 0; i < set.length; i++){
      let now = set[i];
      let next = set.slice(0, i).concat(set.slice(i + 1));
      if (subsetSum(next, snoball + now)) return true
    }
    return false
  }
  return subset(set, 0)
}

const subsetSum = function (set) {
  return knapsackProblem(set, 0)
}

const partitionProblem (set) {
  // can we find two subsets of our initial set of numbers, such that the sums of those 2 subsets sums to 0?
  // can we reduce this to our subset sum problem above?
}



module.exports = {
  countChange,
  partitionsOfNum,
  subsetSum,
  knapsackProblem
}
