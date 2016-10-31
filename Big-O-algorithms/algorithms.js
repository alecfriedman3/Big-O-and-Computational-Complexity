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
