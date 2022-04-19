/**
 * 819. 最常见的单词
 * 给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。

题目保证至少有一个词不在禁用列表中，而且答案唯一。

禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。

链接：https://leetcode-cn.com/problems/most-common-word
 */



/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
	const result = {};
	const re = /[' '|,|.|;|?|!]/g;
	const curArray = paragraph.toLowerCase().split(re).filter(item => Boolean(item)).filter(item => !banned.includes(item));
	curArray.forEach(item => {
		if(!result[item]){
			result[item] = 1;
		} else {
			result[item] += 1;
		}
	})
	const keys = Object.keys(result);
	const values = Object.values(result);
	const max = Math.max.apply(Math, values);
	const index = values.findIndex(item => item === max);
	return keys[index];
};

// var paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// var banned = ["hit"]
var paragraph = "Bob. hIt, baLl"
var banned = ["bob", "hit"]

console.log('result', mostCommonWord(paragraph, banned));
