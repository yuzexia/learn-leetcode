/**
 * https://leetcode.cn/contest/weekly-contest-340/problems/prime-in-diagonal/
 * @param {number[][]} nums
 * @return {number}
 */

function diagonalPrime(nums: number[][]): number {
  const result = []
  nums.forEach((item: number[], index: number) => {
    result.push(item[index], item[item.length - index -1])
  })
  const _result = result.filter((item) => {
      return isPrime(item)
  })
  return _result.length ? Math.max.apply(Math, _result) : 0
};

function isPrime(num) {  
if (num < 2) {  
  return false;  
}  
for (let i = 2; i <= Math.sqrt(num); i++) {  
  if (num % i === 0) {  
    return false;  
  }  
}  
return true;  
}