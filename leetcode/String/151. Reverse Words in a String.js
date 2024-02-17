/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  let words = s.split(' ').reverse();
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== '') {
      result.push(words[i]);
    } else {
      continue;
    }
  }
  return result.join(' ');
};

console.log(reverseWords('  hello world  '));
