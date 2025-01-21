/**     
 * https://leetcode.cn/problems/find-closest-number-to-zero/
 */

//官方题解
function findClosestNumber(nums: number[]): number {
  let res = nums[0];   // 已遍历元素中绝对值最小且数值最大的元素
  let dis = Math.abs(nums[0]);   // 已遍历元素的最小绝对值
  for (let num of nums) {
      if (Math.abs(num) < dis) {
          dis = Math.abs(num);
          res = num;
      } else if (Math.abs(num) === dis) {
          res = Math.max(res, num);
      }
  }
  return res;
}

// 自己的解法
function findClosestNumber2(nums: number[]): number {
  const _nums = nums.map(item => Math.abs(item));
  const min = Math.min(..._nums);
  const result: number[] = [];
  const index = _nums.forEach((item, index) => {
    if(item === min) {
      result.push(nums[index]);
    }
  })
  return Math.max(...result);
};

console.log(findClosestNumber([-100000,-100000]))
console.log(findClosestNumber2([-100000,-100000]))