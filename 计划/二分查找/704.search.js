/**
 * 704. 二分查找
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

  链接：https://leetcode.cn/problems/binary-search
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while(left <= right) {
    let mid = Math.floor((right - left) / 2) + left;
    const num = nums[mid]
    if(num === target) {
      return mid;
    } else if(num > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

const nums = [-1,0,3,5,9,12], target = 9;
console.log(search(nums, target));