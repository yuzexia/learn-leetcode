/**
 * 162. 寻找峰值
  峰值元素是指其值严格大于左右相邻值的元素。
  给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。
  你可以假设 nums[-1] = nums[n] = -∞ 。
  你必须实现时间复杂度为 O(log n) 的算法来解决此问题。
  https://leetcode.cn/problems/find-peak-element/description/?envType=daily-question&envId=2023-12-18
 */

function findPeakElement(nums: number[]): number {
  let idx: number = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[idx]) {
      idx = i;
    }
  }
  return idx;
};

// const nums = [1,2,1,3,5,6,4]
const nums = [1,2]

console.log(findPeakElement(nums))