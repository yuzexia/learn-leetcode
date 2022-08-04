/**
 * 784. 字母大小写全排列
 * 给定一个字符串 s ，通过将字符串 s 中的每个字母转变大小写，我们可以获得一个新的字符串。

返回 所有可能得到的字符串集合 。以 任意顺序 返回输出。

连接：https://leetcode-cn.com/problems/letter-case-permutation/

*/

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let ans = [];
    const n = s.length;
    for (let i = 0; i < n; i++) {
    	if(!Number(s[i])) {
    		ans = ans.map((item) => `${item}${s[i].toLowerCase()} ${item}${s[i].toUpperCase()}`)
    	} else {
    		if(ans.length) {
    			console.log('test', s[i]);
    			ans = ans.map((item) => `${item}${s[i]}`)
    		} else {
    			ans.push(s[i])
    		}
    	}
    }
    return ans;
};

var s = "a1b2";

console.log('result:', letterCasePermutation(s));
