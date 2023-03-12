/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  let idx = s.indexOf('*')
  if(idx == -1) {
    return s
  }
  let strArr = s.split('')
  strArr.splice(idx-1, 2)
  return removeStars(strArr.join(''))
};

var s = "leet**cod*e"

console.log(removeStars(s))