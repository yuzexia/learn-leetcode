/**
 * 45. 跳跃游戏 II
 * 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

假设你总是可以到达数组的最后一个位置。

链接：https://leetcode-cn.com/problems/jump-game-ii
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
	let position = nums.length - 1;
	let steps = 0;
	while(position > 0){
		for(let i = 0; i < position; i++) {
			if(i + nums[i] >= position) {
				position = i;
				steps++;
				break;
			}
		}
	}
	return steps;
};

var nums = [2,3,0,1,4];
// var nums = [1,2,1,1,1];

console.log('result', jump(nums));

var jump2 = function(nums){
	let length = nums.length;
	let maxPosition = 0;
	let end = 0;
	let steps = 0;
	for(let i = 0; i < length - 1; i++){
		maxPosition = Math.max(maxPosition, i + nums[i]);
		if(i === end) {
			end = maxPosition;
			steps++;
		}
	}
	return steps;
}

console.log('result2', jump2(nums));