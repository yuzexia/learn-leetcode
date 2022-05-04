/**
 * 416. 分割等和子集
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * 
 * 连接：https://leetcode.cn/problems/partition-equal-subset-sum/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const n = nums.length;
    const sum = nums.reduce((cur, pre) => cur + pre);
    const max = Math.max.apply(Math, nums);
    if(n < 2) {
    	// 如果len < 2，则不可能将数组分割成元素和相等的两个子集，因此直接返回 false。
    	return false;
    }
	const target = Math.floor(sum / 2);
    if(sum % 2 === 1) { // sum & 1
    	// 如果数组总和为奇数，则不可能将数组分割成元素和相等的两个子集，因此直接返回 false。
    	return false;
    }
	if(max > target){
		// 如果max > target ，除max元素以外的所有元素之和 < target，则不可能将数组分割成元素和相等的两个子集，因此直接返回 false。
		return false;
	}
    

 	const dp = new Array(target + 1).fill(false);
    dp[0] = true;
    for (const num of nums) {
        for (let j = target; j >= num; --j) {
            dp[j] |= dp[j - num];
        }
    }
 	console.log('dp::', dp);
    
    return dp[target];

};

var nums = [1,5,11,5];

console.log('result::', canPartition(nums));

