/**
 * 6315. 统计范围内的元音字符串数 显示英文描述
通过的用户数0
尝试过的用户数0
用户总通过次数0
用户总提交次数0
题目难度Easy
给你一个下标从 0 开始的字符串数组 words 和两个整数：left 和 right 。

如果字符串以元音字母开头并以元音字母结尾，那么该字符串就是一个 元音字符串 ，其中元音字母是 'a'、'e'、'i'、'o'、'u' 。

返回 words[i] 是元音字符串的数目，其中 i 在闭区间 [left, right] 内。

*/
function vowelStrings(words, left, right) {
    var vowel = ['a', 'e', 'i', 'o', 'u'];
    var newWords = words.slice(left, right + 1);
    var reuslt = 0;
    newWords.forEach(function (item) {
        var firstLetter = item.slice(0, 1);
        var lastLetter = item.slice(-1);
        if (vowel.indexOf(firstLetter) !== -1 && vowel.indexOf(lastLetter) !== -1)
            reuslt += 1;
    });
    return reuslt;
}
;
// var words = ["hey", "aeo", "mu", "ooo", "artro"], left = 1, right = 4;
var words = ["are","amy","u"], left = 0, right = 2;
console.log(vowelStrings(words, left, right));
