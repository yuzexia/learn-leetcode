/**
 * 
 * 34. 在排序数组中查找元素的第一个和最后一个位置
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回[-1, -1]。

进阶：

你可以设计并实现时间复杂度为O(log n)的算法解决此问题吗？

链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var result = [];
    nums.forEach((item, index) => {
        if(item === target) {
            result.push(index)
        }
    })
    var len = result.length;
    if(len === 0) {
        result = [-1, -1];
    } else if (len === 1) {
        result[1] = result[0]
    } else if (len > 2) {
        result[1] = result[len - 1]
    }
    console.log('result', result);
    result.length = 2;
    return result;
};

var nums = [5,7,7,8,8,10]
var target = 0

searchRange(nums, target);