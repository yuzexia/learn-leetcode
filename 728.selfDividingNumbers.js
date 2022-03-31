/**

728.自除数
自除数是指可以被它包含的每一位数整除的数。

例如，128 是一个 自除数 ，因为128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
自除数 不允许包含 0 。

给定两个整数left和right ，返回一个列表，列表的元素是范围[left, right]内所有的 自除数 。
链接：https://leetcode-cn.com/problems/self-dividing-numbers
 * 
 * */

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const result = []
    for(let i = left; i <= right; i ++){
        const str = `${i}`
        const _status = str.split('').every(item => {
            return str % item === 0
        })
        _status && result.push(i)
    }
    return(result);
};

selfDividingNumbers(47, 85);