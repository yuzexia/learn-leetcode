

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
  var result = []
  var numsArr = nums.sort((a, b) => a-b)
  for (let i = 0; i < queries.length; i++) {
      var _sum = 0;
      var _res = []
      for (let j = 0; j < numsArr.length; j++) {
        _sum += nums[j]
          if(_sum <= queries[i]){
              _res.push(nums[j]) 
          }
      }
      result.push(_res.length)
  }
  return result
};

// [736411,184882,914641,37925,214915]
// [331244,273144,118983,118252,305688,718089,665450]
var nums = [736411,184882,914641,37925,214915]
var queries = [331244,273144,118983,118252,305688,718089,665450]

// [2,2,1,1,2,3,3]
console.log(answerQueries(nums, queries))