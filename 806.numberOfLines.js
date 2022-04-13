/**
 * 806. 写字符串需要的行数
 * 
 * 我们要把给定的字符串 S从左到右写到每一行上，每一行的最大宽度为100个单位，
 * 如果我们在写某个字母的时候会使这行超过了100 个单位，那么我们应该把这个字母写到下一行。
 * 我们给定了一个数组widths，这个数组widths[0] 代表 'a' 需要的单位，widths[1] 代表 'b' 需要的单位，...，widths[25] 代表 'z' 需要的单位。

链接：https://leetcode-cn.com/problems/number-of-lines-to-write-string
*/

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */

const MAX_WIDTH = 100;
var numberOfLines = function(widths, s) {
	let width = 0;
	let line = 1;
	for(let i = 0; i < s.length; i++) {
		const len = widths[s[i].charCodeAt() - 'a'.charCodeAt()]
		width += len;
		if(width > MAX_WIDTH) {
			line++;
			width = len; // 如果我们在写某个字母的时候会使这行超过了100 个单位，那么我们应该把这个字母写到下一行。
		}
	}
	console.log('result', [line, width]);
    return [line, width];
};

var widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
var S = "abcdefghijklmnopqrstuvwxyz"

numberOfLines(widths, S);