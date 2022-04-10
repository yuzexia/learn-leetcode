/**
 * 844. 比较含退格的字符串
 * 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。

链接：https://leetcode-cn.com/problems/backspace-string-compare
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return build(s) === build(t);
};

var build = function(str) {
	var result = '';
	for(let chat of str) {
		// console.log('chat', chat);
		if(chat === '#'){
			result = result.slice(0, result.length - 1);
		} else {
			result += chat;
		}
	}
	console.log('result', result);
	return result;
}

var s = "ab#c";
var t = "ad#c"

backspaceCompare(s, t);