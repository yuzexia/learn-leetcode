/**
 * 796. 旋转字符串
 * 给定两个字符串, s和goal。如果在若干次旋转操作之后，s能变成goal，那么返回true。

s的 旋转操作 就是将s 最左边的字符移动到最右边。

例如, 若s = 'abcde'，在旋转一次之后结果就是'bcdea'。

链接：https://leetcode-cn.com/problems/rotate-string
*/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
	return s.length === goal.length && (s + s).indexOf(goal) !== -1;
};
var s = "abcde";
var goal = "abced";

rotateString(s, goal);