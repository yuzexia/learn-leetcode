

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  const arrX = nums.slice(0, n)
  const arrY = nums.slice(n)
  const result = []
  for (let i = 0; i < arrX.length; i++) {
    result.push(arrX[i], arrY[i])
  }
  console.log('result', result)
  return result
};

var nums = [2,5,1,3,4,7]
var n = 3

shuffle(nums, n)