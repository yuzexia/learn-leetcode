/**
 * 面试题 10.01. 合并排序的数组
 * 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

初始化 A 和 B 的元素数量分别为 m 和 n。
链接：https://leetcode-cn.com/problems/sorted-merge-lcci
*/

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
    A.splice(m, 0, ...B)
    A.length = m + n;
    A.sort((a, b) => a - b);
    console.log('result', A);
};

var A = [1,2,3,0,0,0]
var m = 3
var B = [2,5,6]
var n = 3

merge(A, m, B, n);