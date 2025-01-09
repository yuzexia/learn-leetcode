
/**
 * 6376. 一最多的行
 * 给你一个大小为 m x n 的二进制矩阵 mat ，请你找出包含最多 1 的行的下标（从 0 开始）以及这一行中 1 的数目。

如果有多行包含最多的 1 ，只需要选择 行下标最小 的那一行。

返回一个由行下标和该行中 1 的数量组成的数组
 * 
 * 
 * @param mat 
 * @returns 
 */
function rowAndMaximumOnes(mat: number[][]): number[] {
  let idx_result: number = 0
  let num_result: number = 0
  mat.forEach((item: number[], index: number) => {
    const result = item.filter((idx: number, ind) => {
      return idx === 1
    })
    if(result.length > num_result) {
      idx_result = index;
      num_result = result.length
    }
  })
  return [idx_result, num_result]
};