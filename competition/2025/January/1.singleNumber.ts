// 找单独的数

function solution(cards: number[]): number {
  const result = cards.reduce((acc: any, cur: number | string) => {
    if(acc[cur]) acc[cur] += 1
    else acc[cur] = 1;
    return acc
  }, {}) || {};
  for (const [key, value] of Object.entries(result)) {
    if (value === 1) return Number(key)
  }
  return 0;
}

function main() {
  // Add your test cases here
  console.log(solution([1, 1, 2, 2, 3, 3, 4, 5, 5]) === 4);
  console.log(solution([0, 1, 0, 1, 2]) === 2);
}

main();
