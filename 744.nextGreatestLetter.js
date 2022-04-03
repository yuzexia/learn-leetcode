/**
744. 寻找比目标字母大的最小字母
给你一个排序后的字符列表 letters ，列表中只包含小写英文字母。另给出一个目标字母target，请你寻找在这一有序列表里比目标字母大的最小字母。

在比较时，字母是依序循环出现的。举个例子：

- 如果目标字母 target = 'z' 并且字符列表为letters = ['a', 'b']，则答案返回'a'
链接：https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target
 * 
 */

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
	var length = letters.length;
	var next = letters[0];
	for (var i = 0; i < length; i++) {
		if(letters[i] > target) {
			next = letters[i];
			break;
		}
	}
	return next;
};

var letters = ["c", "f", "j"];
var target = "a";

nextGreatestLetter(letters, target);