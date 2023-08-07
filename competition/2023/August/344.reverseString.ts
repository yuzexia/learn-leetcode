/**
  Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  // s.reverse()
  const n: number = s.length;
  for(let left = 0, right = n - 1; left < right; ++left, --right) {
    [s[left], s[right]] = [s[right], s[left]]
  }
};