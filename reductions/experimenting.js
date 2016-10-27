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

