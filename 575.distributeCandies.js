/**
 * 
Alice 有 n 枚糖，其中第 i 枚糖的类型为 candyType[i] 。Alice 注意到她的体重正在增长，所以前去拜访了一位医生。

医生建议 Alice 要少摄入糖分，只吃掉她所有糖的 n / 2 即可（n 是一个偶数）。Alice 非常喜欢这些糖，她想要在遵循医生建议的情况下，尽可能吃到最多不同种类的糖。

给你一个长度为 n 的整数数组 candyType ，返回： Alice 在仅吃掉 n / 2 枚糖的情况下，可以吃到糖的 最多 种类数。
链接：https://leetcode-cn.com/problems/distribute-candies
 * 
 * */
 

 /**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
	// 先对数组进行去重，获取糖果种类
	var result = Array.from(new Set(candyType));
	// 糖果种类
	var types = result.length;
	// 每日吃糖数量
	var count = candyType.length / 2;
	console.log('糖果种类', types, '可吃糖果数', count);
	console.log('可以几种糖果：', count >= result.length ? result.length : count);
	return count >= result.length ? result.length : count;
};

distributeCandies([1,1,2,3]);

// 官解--更优
var distributeCandies2 = function(candyType) {
	var result = new Set(candyType);
	return Math.min(result.size, candyType.length / 2);
}

distributeCandies2([1,1,2,3]);