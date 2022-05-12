/**
 * 944. 删列造序
 * 连接：https://leetcode.cn/problems/delete-columns-to-make-sorted/
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
 var minDeletionSize = function(strs) {
  const result = [];
  let str = ''
  strs.forEach(item => {
    result.push(item[0])
  })
  return result;
};

var strs = ["cba","daf","ghi"];

console.log('result::', minDeletionSize(strs));