/**
 * 821. 字符的最短距离
 * 给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。

返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。

两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。

链接：https://leetcode-cn.com/problems/shortest-distance-to-a-character

*/

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
	const cIdx = [];
	const result = [];
	// 获取目标字母c在s中的索引数组
	for (let i = 0; i < s.length; i++) {
		if (s[i] === c) {
			cIdx.push(i);
		}
	}
	for (let i = 0; i < s.length; i++) {
		const lIdx = [];
		cIdx.forEach(item => lIdx.push(Math.abs(i - item)));
		result.push(Math.min.apply(Math, lIdx));
	}
	return result;
};

var s = "loveleetcode";
var c = "e";

console.log('shortestToChar', shortestToChar(s, c));
