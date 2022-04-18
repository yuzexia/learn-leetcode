/**
 * 386. 字典序排数
 * 给你一个整数 n ，按字典序返回范围 [1, n] 内所有整数。

你必须设计一个时间复杂度为 O(n) 且使用 O(1) 额外空间的算法。
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const result = [];
    const array = [];
    for(let i = 1; i <= n; i++) {
        result.push(`${i}`);
    }
    result.sort().forEach(item => {
    	array.push(+item);
    })
    return array;
};

console.log('result', lexicalOrder(13));