/**
 * 6316. 重排数组以得到最大前缀分数
 * 给你一个下标从 0 开始的整数数组 nums 。你可以将 nums 中的元素按 任意顺序 重排（包括给定顺序）。

  令 prefix 为一个数组，它包含了 nums 重新排列后的前缀和。换句话说，prefix[i] 是 nums 重新排列后下标从 0 到 i 的元素之和。nums 的 分数 是 prefix 数组中正整数的个数。

  返回可以得到的最大分数
 */

function maxScore(nums: number[]): number {
  let result: number[] = []
  nums.sort((lhs, rhs) => rhs - lhs).reduce((acc: number, current: number) => {
    const sum = acc + current
    result.push(sum)
    return sum
  }, 0)
  return result.filter((item: number) => {
    return item > 0
  }).length
};

const nums = [2,-1,0,1,-3,3,-3]

maxScore(nums)