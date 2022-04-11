/**
 * 357. 统计各位数字都不同的数字个数
 * 给你一个整数 n ，统计并返回各位数字都不同的数字 x 的个数，其中 0 <= x < 10n 。

*/


/**
 * @param {number} n
 * @return {number}
 */
// var countNumbersWithUniqueDigits = function(n) {
// 	var length = calcLength(n);
// 	var result = 0;
// 	for(let i = 0; i < length; i++) {
// 		var str = i.toString();
// 		if(str !== Array.from(new Set(str.split(''))).join('')) {
// 			result += 1;
// 		}
// 	}
// 	console.log('result', result, length - result);
// 	return length - result;
// };

// var calcLength = function(n) {
// 	var len = 1;
// 	for(let i = 0; i < n; i++) {
// 		len *= 10;
// 	}
// 	return len;
// }
var countNumbersWithUniqueDigits = function(n) {
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return 10;
    }
    let res = 10, cur = 9;
    for(let i = 0; i < n - 1; i++) {
    	cur *= 9 - i;
    	res += cur;  
    }
	console.log('cur, res', cur, res);
    return res;
};
countNumbersWithUniqueDigits(3)