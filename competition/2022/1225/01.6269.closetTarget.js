
/** 
 * 6269. 到目标字符串的最短距离
*/

/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
  const formatWords = [...words, ...words]
  const formatIndex = [startIndex, startIndex + words.length]
  if(!formatWords.includes(target)) {
    return -1;
  }
  const idxs =  []
  formatWords.filter((word, index) => {
    if(word === target) {
      idxs.push(index)
    }
  })
  const result = []
  idxs.forEach((idx) => {
    result.push(Math.abs(idx - formatIndex[0]))
    result.push(Math.abs(idx - formatIndex[1]))
  })
  return Math.min.apply(Math, result)
};

// const words = ["hello","i","am","leetcode","hello"], 
//       target = "hello", 
//       startIndex = 1;

const words = ["a","b","leetcode"],
      target = "leetcode",
      startIndex = 0

console.log('result:', closetTarget(words, target, startIndex))