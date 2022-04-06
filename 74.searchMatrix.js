/**
 * 74. 搜索二维矩阵
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。

链接：https://leetcode-cn.com/problems/search-a-2d-matrix
 * /

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var result = false;
    matrix.forEach(item => {
        item.forEach(itl => {
            if (itl === target) result = true;
        })
    })
    return result;
};