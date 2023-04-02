function kItemsWithMaximumSum(numOnes: number, numZeros: number, numNegOnes: number, k: number): number {
  const ones = new Array(numOnes).fill(1)
  const zeros = new Array(numZeros).fill(0)
  const negOnes = new Array(numNegOnes).fill(-1)
  const result = [...ones, ...zeros, ...negOnes].slice(0, k).reduce((pre, cur) => {
    return pre + cur
  }, 0)
  return result
};

const numOnes = 3, numZeros = 2, numNegOnes = 0, k = 2

kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k)