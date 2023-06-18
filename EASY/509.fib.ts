/**
 * 509. 斐波那契数
 * https://leetcode.cn/problems/fibonacci-number/
 */

function fib(n: number): number {
  let p: number = 0,
      q: number = 0,
      r: number = 1;
  if(n == 0) return 0
  if(n == 1) return 1
  for(let i = 2; i <= n; i++) {
      p = q;
      q = r;
      r = p + q;
  }
  return r;
};

const number = 30

fib(number)