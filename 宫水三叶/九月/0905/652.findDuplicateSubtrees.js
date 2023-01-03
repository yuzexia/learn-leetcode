/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
let ans;
let map;
var findDuplicateSubtrees = function(root) {
  ans = new Array();
  map = new Map();
  dfs(root)
  return ans
};

var dfs = function(node) {

}

var root = [1,2,3,4,null,2,4,null,null,4]

findDuplicateSubtrees(root)