

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */


function wordBreak(s, wordDict) {
    const n = s.length;
    const wordDictSet = new Set(wordDict);
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
        	console.log('i', i);
        	console.log('j', j);
        	console.log('wordictset', s.substr(j, i - j));
            if (dp[j] && wordDictSet.has(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
};

var s = "leetcode";
var wordDict = ["leet", "code"]

console.log('result', wordBreak(s, wordDict));