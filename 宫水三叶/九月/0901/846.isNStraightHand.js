/**
 * 846. 一手顺子
 * Alice 手中有一把牌，她想要重新排列这些牌，分成若干组，使每一组的牌数都是 groupSize ，并且由 groupSize 张连续的牌组成。

给你一个整数数组 hand 其中 hand[i] 是写在第 i 张牌，和一个整数 groupSize 。如果她可能重新排列这些牌，返回 true ；否则，返回 false 。

示例 1：

输入：hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
输出：true
解释：Alice 手中的牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。
示例 2：

输入：hand = [1,2,3,4,5], groupSize = 4
输出：false
解释：Alice 手中的牌无法被重新排列成几个大小为 4 的组。

链接：https://leetcode.cn/problems/hand-of-straights
 */


/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
  hand.sort((lhs, rhs) => lhs - rhs)
  const count = hand.length / groupSize
  for(let i = 0; i < count; i++) {
      const curr = hand[0]
      hand = hand.slice(1)
      for(let j=0;j<groupSize-1;j++) {
          const index = hand.indexOf(curr+j+1)
          if (index == -1) return false
          
          hand = hand.slice(0, index).concat(hand.slice(index+1))
      };
  }
  return hand.length == 0
};

var hand = [1,2,3,6,2,3,4,7,8], groupSize = 3

isNStraightHand(hand, groupSize)