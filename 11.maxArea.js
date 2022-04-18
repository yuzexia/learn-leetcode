/**
 * 11. 盛最多水的容器
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

说明：你不能倾斜容器。

链接：https://leetcode-cn.com/problems/container-with-most-water
 */

/**
 * @param {number[]} height
 * @return {number}
 */

 /**
  * 双循环暴力解法
  * 时间复杂度O(n*n)
  * 空间复杂度O(1)
var maxArea = function(height) {
	const length = height.length;
	let max = 0;
	for(let i = 0; i < length; i++) {
		for(let j = i + 1; j < length; j++) {
			max = Math.max(max, Math.min(height[i], height[j]) * (j - i))
		}
	}
	return max;
};
*/

/**
 * 双指针法
 * 复杂度分析

时间复杂度：O(N)O(N)，双指针总计最多遍历整个数组一次。

空间复杂度：O(1)O(1)，只需要额外的常数级别的空间。
*/

var maxArea = function(height) {
	let r = height.length - 1;
	let l = 0;
	let max = 0;
	while(l < r){
		let area = Math.min(height[l], height[r]) * (r - l);
		max = Math.max(max, area);
		if(height[l] <= height[r]){
			++l;
		} else {
			--r;
		}
	}
	return max;
}


var height = [1,8,6,2,5,4,8,3,7];

console.log('maxArea', maxArea(height));