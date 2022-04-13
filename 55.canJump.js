/**
 * 55. 跳跃游戏
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。

https://leetcode-cn.com/problems/jump-game/
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const length = nums.length;
    let rightMost = 0;
    for(let i = 0; i < length; i++) {
    	if(i <= rightMost) {
    		// 最远到达的位置，基于i位置，再前进最大nums[i]步
    		rightMost = Math.max(rightMost, i + nums[i]);

    		// 当达到的最大距离大于目标位置直接返回true
    		if(rightMost >= length - 1) {
    			return true;
    		}
    	}
    }
    return false;
};

var nums = [2,3,1,1,4];
// var nums = [3,2,1,0,4];
// var nums = [3, 0, 0, 2, 4]

console.log('result', canJump(nums));