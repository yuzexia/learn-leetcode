

/**
 * 6350. 找出可整除性得分最大的整数
 * 
 * 给你两个下标从 0 开始的整数数组 nums 和 divisors 。

divisors[i] 的 可整除性得分 等于满足 nums[j] 能被 divisors[i] 整除的下标 j 的数量。

返回 可整除性得分 最大的整数 divisors[i] 。如果有多个整数具有最大得分，则返回数值最小的一个。


 * @param nums 
 * @param divisors 
 */
function maxDivScore(nums: number[], divisors: number[]): number {
  let count_result: number[] = []
  let num_result: number = divisors[0]
  divisors.forEach((item: number) => {
    const result = nums.filter((itl: number) => {
      return itl % item === 0
    })
    if(result.length >= count_result.length) {
      num_result = result.length = count_result.length ? item : num_result
    }
  })
  return num_result
};