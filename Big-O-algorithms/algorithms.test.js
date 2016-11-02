const expect = require('chai').expect;
const algorithms = require('./algorithms')

xdescribe('The Algorithm', () => {

  describe('for searching an array', () =>{

    it ('should return an array', () => {
      expect(algorithms.stringSearch('here is a testing string', 'k')).to.be.an('array')
      expect(algorithms.stringSearch('here is a testing string', 'k').length).to.be.equal(2)
    })

    it ('should return a boolean solution in the first index and a counter in the second', () => {
      expect(algorithms.stringSearch('here is a testing string', 'k')[0]).to.be.a('boolean')
      expect(algorithms.stringSearch('here is a testing string', 'k')[1]).to.be.a('number')
    })

    it ('should determing whether a string contains a character or not', () => {
      expect(algorithms.stringSearch('here is a testing string', 'k')[0]).to.be.false
      expect(algorithms.stringSearch('here is a testing string', 'n')[0]).to.be.true
    })

  })

  describe('for searching a sorted array', () =>{

    it ('should return an array', () => {
      expect(algorithms.sortedArrSearch([1, 2, 4, 5, 7, 8, 9, 13], 6)).to.be.an('array')
      expect(algorithms.sortedArrSearch([1, 2, 4, 5, 7, 8, 9, 13], 6).length).to.be.equal(2)
    })

    it ('should return a boolean solution in the first index and a counter in the second', () => {
      expect(algorithms.sortedArrSearch([1, 2, 4, 5, 7, 8, 9, 13], 6)[0]).to.be.a('boolean')
      expect(algorithms.sortedArrSearch([1, 2, 4, 5, 7, 8, 9, 13], 6)[1]).to.be.a('number')
    })

    it ('should determing whether a string contains a character or not', () => {
      expect(algorithms.sortedArrSearch([1, 2, 4, 5, 7, 8, 9, 13], 6)[0]).to.be.false
      expect(algorithms.sortedArrSearch([1, 2, 4, 5, 7, 8, 9, 13], 8)[0]).to.be.true
    })

  })

  describe('for determining whether any two numbers in an array sum to a given value', () =>{

    it ('should return an array', () => {
      expect(algorithms.pairSumNaive([1, 2, 4, 5, 7, 8, 9, 13], 19)).to.be.an('array')
      expect(algorithms.pairSumNaive([1, 2, 4, 5, 7, 8, 9, 13], 19).length).to.be.equal(2)
    })

    it ('should return a boolean solution in the first index and a counter in the second', () => {
      expect(algorithms.pairSumNaive([1, 2, 4, 5, 7, 8, 9, 13], 19)[0]).to.be.a('boolean')
      expect(algorithms.pairSumNaive([1, 2, 4, 5, 7, 8, 9, 13], 19)[1]).to.be.a('number')
    })

    it ('should determing whether a string contains a character or not', () => {
      expect(algorithms.pairSumNaive([1, 2, 4, 5, 7, 8, 9, 13], 19)[0]).to.be.false
      expect(algorithms.pairSumNaive([1, 2, 4, 5, 7, 8, 9, 13], 11)[0]).to.be.true
      expect(algorithms.pairSumNaive([1, 1, 2, 3, 4, 5], 7)[0]).to.be.true
      expect(algorithms.pairSumNaive([1, 1, 2, 3, 4, 5], 7)[0]).to.be.true
      expect(algorithms.pairSumNaive([1, 2, 3, 4, 5], 10)[0]).to.be.false
      expect(algorithms.pairSumNaive([1, 2, 3, 7, 8], 7)[0]).to.be.false
      expect(algorithms.pairSumNaive([1, 2, 3, 4, 5], 2)[0]).to.be.false
      expect(algorithms.pairSumNaive([1], 2)[0]).to.be.false
      expect(algorithms.pairSumNaive([], 2)[0]).to.be.false

    })

  })

  describe('for optimizing pairSum', () =>{

    it ('should return an array', () => {
      expect(algorithms.pairSumOptimized([1, 2, 4, 5, 7, 8, 9, 13], 19)).to.be.an('array')
      expect(algorithms.pairSumOptimized([1, 2, 4, 5, 7, 8, 9, 13], 19).length).to.be.equal(2)
    })

    it ('should return a boolean solution in the first index and a counter in the second', () => {
      expect(algorithms.pairSumOptimized([1, 2, 4, 5, 7, 8, 9, 13], 19)[0]).to.be.a('boolean')
      expect(algorithms.pairSumOptimized([1, 2, 4, 5, 7, 8, 9, 13], 19)[1]).to.be.a('number')
    })

    it ('should determing whether a string contains a character or not', () => {
      expect(algorithms.pairSumOptimized([1, 2, 4, 5, 7, 8, 9, 13], 19)[0]).to.be.false
      expect(algorithms.pairSumOptimized([1, 2, 4, 5, 7, 8, 9, 13], 11)[0]).to.be.true
      expect(algorithms.pairSumOptimized([1, 1, 2, 3, 4, 5], 7)[0]).to.be.true
      expect(algorithms.pairSumOptimized([1, 1, 2, 3, 4, 5], 7)[0]).to.be.true
      expect(algorithms.pairSumOptimized([1, 2, 3, 4, 5], 10)[0]).to.be.false
      expect(algorithms.pairSumOptimized([1, 2, 3, 7, 8], 7)[0]).to.be.false
      expect(algorithms.pairSumOptimized([1, 2, 3, 4, 5], 2)[0]).to.be.false
    })

  })

  describe('for stair step problem', () =>{

    it ('should return an array', () => {
      expect(algorithms.stairStep(5)).to.be.an('array')
      expect(algorithms.stairStep(5).length).to.be.equal(2)
    })

    it ('should return a number solution in the first index and a counter in the second', () => {
      expect(algorithms.stairStep(5)[0]).to.be.a('number')
      expect(algorithms.stairStep(5)[1]).to.be.a('number')
    })

    it ('should determing whether a string contains a character or not', () => {
      expect(algorithms.stairStep(2)[0]).to.be.equal(2)
      expect(algorithms.stairStep(5)[0]).to.be.equal(13)
      expect(algorithms.stairStep(7)[0]).to.be.equal(44)
      expect(algorithms.stairStep(10)[0]).to.be.equal(274)
    })

  })

})
