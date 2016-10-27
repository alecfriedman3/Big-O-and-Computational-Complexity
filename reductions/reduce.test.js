const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon')
// const should = chai.should();
// const spies = require('chai-spies');
// chai.use(spies);

const methods = require('./experimenting');
// const {
//   countChangeCombinations,
//   combinatorialPartitonsReduceToCoins,
//   knapsackProblem,
//   subsetSumReduceToKnapsack,
//   partitionProblemReducedToKnapsack,
//   partitionProblem,
//   knapsackReduceToPartiton
// } = methods

describe('Reductions:', () => {
  let knapsackSpy, coinSpy, partitionSpy;

  describe('The Counting Change combinations problem', () =>{

    it ('should count the number of ways to make change from a given list of coins', () => {
      expect(methods.countChangeCombinations(4, [1, 2])).to.be.equal(3);
      expect(methods.countChangeCombinations(10, [5, 2, 3])).to.be.equal(4);
      expect(methods.countChangeCombinations(11, [5, 7])).to.be.equal(0);
      expect(methods.countChangeCombinations(61, [1, 5, 10, 25])).to.be.equal(73);
      expect(methods.countChangeCombinations(572, [8, 12, 13, 94, 27])).to.be.equal(2317)
    })

    // CAUTION THIS WILL TAKE A LONG TIME TO RUN IF YOU DO NOT USE MEMOIZATION
    it ('only try this if you think your algorithm is efficient!', function() {
      this.timeout(5000)
      expect(methods.countChangeCombinations(363, [2, 7, 4, 8, 16])).to.be.equal(118519)
    })

  })

  describe('The Partitions of an integer', () => {

    it ('should reduce to Counting Change (by calling countChangeCombinations)', () => {
      coinSpy = sinon.spy(methods, 'countChangeCombinations');
      methods.combinatorialPartitonsReduceToCoins(5);
      expect(coinSpy.called).to.be.true;
      methods.countChangeCombinations.restore();
    })

    it ('should count the number of unique partitions of an integer n', () => {

      expect(methods.combinatorialPartitonsReduceToCoins(5)).to.be.equal(7)
      expect(methods.combinatorialPartitonsReduceToCoins(6)).to.be.equal(11)
      expect(methods.combinatorialPartitonsReduceToCoins(7)).to.be.equal(15)
      expect(methods.combinatorialPartitonsReduceToCoins(9)).to.be.equal(30)
      expect(methods.combinatorialPartitonsReduceToCoins(11)).to.be.equal(56)
      expect(methods.combinatorialPartitonsReduceToCoins(24)).to.be.equal(1575)

    })


  })

  describe('The Knapsack Problem', () => {

    it ('should determine whether a set of numbers contains a subset which sums to a given value', () => {

      expect(methods.knapsackProblem([1, 3, 6, 7, 9], 12)).to.be.true;
      expect(methods.knapsackProblem([2, 4, 7, 11], 13)).to.be.true;
      expect(methods.knapsackProblem([2, 3, 8, 16], 9)).to.be.false;

    })

  })

  describe('The Subset Sum Problem reduction', () => {

    it ('should reduce to the knapsackProblem', () => {
      knapsackSpy = sinon.spy(methods, 'knapsackProblem');
      methods.subsetSumReduceToKnapsack([1, 3, -2, -3, 4, 5]);
      expect(knapsackSpy.called).to.be.true;
      methods.knapsackProblem.restore();
    })

    it ('should determine whether a set of numbers contains a subset summing to 0', () => {

      expect(methods.subsetSumReduceToKnapsack([1, 2, 3, 4, 5])).to.be.false
      expect(methods.subsetSumReduceToKnapsack([1, 3, -2, -3, 4, 5])).to.be.true

    })

  })

  describe('The Set Partition Problem reduction to Knapsack', () => {

    it ('should reduce to the knapsackProblem', () => {
      knapsackSpy = sinon.spy(methods, 'knapsackProblem');
      methods.partitionProblemReducedToKnapsack([1, 3, -2, -3, 4, 5]);
      expect(knapsackSpy.called).to.be.true;
      methods.knapsackProblem.restore();
    })

    it ('should determine whether a set of numbers contains two subsets which sum to the same value', () => {
      expect(methods.partitionProblemReducedToKnapsack([1, 4, 5, 6, 9])).to.be.false
      expect(methods.partitionProblemReducedToKnapsack([1, 4, 5, 6, 9, 2, 3])).to.be.true
    })

  })

  describe('The Set Partition Problem without reduction', () => {

    it ('should NOT reduce to the knapsackProblem', () => {
      knapsackSpy = sinon.spy(methods, 'knapsackProblem');
      methods.partitionProblem([1, 3, -2, -3, 4, 5]);
      expect(knapsackSpy.called).to.be.false;
      methods.knapsackProblem.restore();
    })

    it ('should determine whether a set of numbers contains two subsets which sum to the same value', () => {
      expect(methods.partitionProblemReducedToKnapsack([1, 4, 5, 6, 9])).to.be.false
      expect(methods.partitionProblemReducedToKnapsack([1, 4, 5, 6, 9, 2, 3])).to.be.true
    })

  })

  describe('The Knapsack Problem reduction to Set Partition', () => {

    it ('should reduce to the Set Partition', () => {
      partitionSpy = sinon.spy(methods, 'partitionProblem');
      methods.knapsackReduceToPartiton([1, 3, 6, 7, 9], 12);
      expect(partitionSpy.called).to.be.true;
      methods.partitionProblem.restore();
    })

    it ('should determine whether a set of numbers contains a subset which sums to a given value', () => {

      expect(methods.knapsackReduceToPartiton([1, 3, 6, 7, 9], 12)).to.be.true;
      expect(methods.knapsackReduceToPartiton([2, 4, 7, 11], 13)).to.be.true;
      expect(methods.knapsackReduceToPartiton([2, 3, 8, 16], 9)).to.be.false;

    })

  })

})
