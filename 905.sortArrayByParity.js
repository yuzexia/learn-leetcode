/**
 * 905. 按奇偶排序数组
 * 给你一个整数数组 nums，将 nums 中的的所有偶数元素移动到数组的前面，后跟所有奇数元素。

返回满足此条件的 任一数组 作为答案。

连接：https://leetcode-cn.com/problems/sort-array-by-parity/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
	nums.sort((a, b) => {
		return a % 2 - b % 2
	})
	return nums;
};

var nums = [3,1,2,4];

console.log('result:::', sortArrayByParity(nums));