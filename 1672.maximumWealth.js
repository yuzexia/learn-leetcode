/**
 * 1672. 最富有客户的资产总量
 * 给你一个 m x n 的整数网格 accounts ，其中 accounts[i][j] 是第 i​​​​​​​​​​​​ 位客户在第 j 家银行托管的资产数量。返回最富有客户所拥有的 资产总量 。

客户的 资产总量 就是他们在各家银行托管的资产数量之和。最富有客户就是 资产总量 最大的客户。

链接：https://leetcode-cn.com/problems/richest-customer-wealth
*/


/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
	const result = [];
	accounts.forEach((item) => {
		result.push(item.reduce((a, b) => {
			return a + b;
		}))
	})
	return Math.max.apply(Math, result);
};

var accounts = [[2,8,7],[7,1,3],[1,9,5]];

console.log('result', maximumWealth(accounts));