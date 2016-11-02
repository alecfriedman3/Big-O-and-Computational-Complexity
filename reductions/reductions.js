// For these just try and code out the solutions to the problems as they are difficult enough as is, don't worry about generating a counter
// Still try and think about what the Big O complexity of your algorithms are though once you've solved them!
// These are pretty difficult problems so don't be discouraged if you don't come accross the answers immediately. Try and solve them with a partner without looking up the solutions

module.exports = {
  // given a target value and a set of coin denominations, how many different combinations of our denominations can we use to make change for our value (making sure to avoid duplicates)?
  // for example if our coins were [1, 5, 10, 25], and we wanted to make change for 15, we could use 10 + 5, 10 + 1 + 1 + 1 + 1 + 1, 5 + 5 + 5, ... (and 5 + 10 would be a duplicate of 10 + 5).
  countChangeCombinations (coins, value) {
    // your code here
  },

  // How many different ways can we partition a number into sums of numbers less than it?
  // Link to a wiki describing the problem https://en.wikipedia.org/wiki/Partition_(number_theory)
  combinatorialPartitonsReduceToCoins (num) {
    // your code here
    // should call this.countChangeCombinations to get the answer
  },

  // given a set of numbers (javascript array) is there a subset of those numbers which sums to a given target value?
  // for example if our given set was [-3, -6, 3, 8, 4, 13, 19] and our target was 7, we should return true because -3 + 8 + 4 = 7
  knapsackProblem (set, target) {
    // your code here, no reduction, from scratch
  },

  // The subset sum problem very similar to the knapsack problem, only it asks if there is a subset which sums to 0. The reduction should be fairly straightforward here
  subsetSumReduceToKnapsack (set) {
    // your code here
    // should call this.knapsackProblem to find your solution
  },

  // The Set Partition problem asks if a set of numbers can be split into two subsets which sum to the same value, and which together contain all numbers of the original set?
  // for example if our set was [1, 5, 4, 6, 7, 11, 12] we could split this into [5, 6, 1, 11] and [7, 4, 12]
  // however the set [5, 2, 3, 9] would be false ([5], and [3, 2] sum to the same value but we still need to use the 9 somewhere)
  partitionProblemReducedToKnapsack (set) {
    // should call this.knapsackProblem to find your solution
  },

  partitionProblem (set) {
    // your code here, no reduction, from scratch
  },

  knapsackReduceToPartiton (set, target) {
    // your code here
    // should call this.partitionProblem to find your answer
  },

}
