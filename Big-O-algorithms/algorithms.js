// Each of these functions should return an array with two elements, the first being the actual solution to the problem and the second being a count of the total number of operations calculated in the function
// If you need to utilize recursion to solve your problem, try defining a helper function inside the scope of the original function which utilizes closure around your counter

const stringSearch = (str, val) => {
  let counter = 0;
  // return [true/false, number of calculations]
}

const sortedArrSearch = (arr, val) => {
  // how can we optimize a search if we know the array is sorted? Can we solve in O(log n)?
  let counter = 0;
}

// given an array and a target value, do two elements in the array sum to the value?
const pairSumNaive = (arr, sumVal) => {
  // Write a solution that solves in O(n^2)
  let counter = 0;
}

const pairSumOptimized = (sortedArr, sumVal) => {
  // assume array passed here will be sorted. Can we solve in O(n)?
  let counter = 0;
}

const stairStep = (num) => {
  // A child must climb a staircase of height num. They can only take steps of length 1, 2, or 3. How many possible ways can they hop up the stairs?
  let counter = 0;
}

module.exports = {
  stringSearch,
  sortedArrSearch,
  pairSumNaive,
  pairSumOptimized,
  stairStep
}
