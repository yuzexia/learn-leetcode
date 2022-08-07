/**
 * 1408. 数组中的字符串匹配
 * 给你一个字符串数组 words ，数组中的每个字符串都可以看作是一个单词。请你按 任意 顺序返回 words 中是其他单词的子字符串的所有单词。

如果你可以删除 words[j] 最左侧和/或最右侧的若干字符得到 word[i] ，那么字符串 words[i] 就是 words[j] 的一个子字符串。

示例 1：

输入：words = ["mass","as","hero","superhero"]
输出：["as","hero"]
解释："as" 是 "mass" 的子字符串，"hero" 是 "superhero" 的子字符串。
["hero","as"] 也是有效的答案。
示例 2：

输入：words = ["leetcode","et","code"]
输出：["et","code"]
解释："et" 和 "code" 都是 "leetcode" 的子字符串。
示例 3：

输入：words = ["blue","green","bu"]
输出：[]

链接：https://leetcode.cn/problems/string-matching-in-an-array
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */

var stringMatching = (words) => {
  const length = words.length;
  const result = []
  for(let i = 0; i <= length - 1; i++){
    words.forEach(item => {
      if(item.indexOf(words[i]) !== -1 && item !== words[i]){
        result.push(words[i])
      }
    })
  }
  return Array.from(new Set(result));
}

// const words = ["mass","as","hero","superhero"]
const words = ["leetcoder","leetcode","od","hamlet","am"]

console.log(stringMatching(words))