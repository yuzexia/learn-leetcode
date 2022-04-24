/**
 * 868. 二进制间距
 * 给定一个正整数 n，找到并返回 n 的二进制表示中两个 相邻 1 之间的 最长距离 。如果不存在两个相邻的 1，返回 0 。

如果只有 0 将两个 1 分隔开（可能不存在 0 ），则认为这两个 1 彼此 相邻 。两个 1 之间的距离是它们的二进制表示中位置的绝对差。例如，"1001" 中的两个 1 的距离为 3 。

链接：https://leetcode-cn.com/problems/binary-gap
*/

/**
 * @param {number} n
 * @return {number}
 */

/**
 * 自己的笨方法
var binaryGap = function(n) {
    const oneArray = [];
    const nTo2 = n.toString(2)
    for (let i = 0; i < nTo2.length; i++) {
    	if(Number(nTo2[i]) === 1) {
    		oneArray.push(i);
    	}
    }
    const result = []
    if(oneArray.length >= 2) {
    	for (let i = 0; i < oneArray.length - 1; i++) {
	    	result.push(Math.abs(oneArray[i] - oneArray[i + 1]))
	    }
    } else {
    	return 0;
    }
    return Math.max.apply(Math, result);
};
*/

// 宫水三叶题解
// 根据题意进行模拟即可，遍历 nn 的二进制中的每一位 i，
// 同时记录上一位 1 的位置 j，即可得到所有相邻 1 的间距，所有间距取 max 即是答案。
var binaryGap = function(n) {
	let j = 0;
	
}

var n = 8;

console.log('result', binaryGap(n));
