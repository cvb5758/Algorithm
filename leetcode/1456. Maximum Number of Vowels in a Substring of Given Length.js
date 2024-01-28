/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function (s, k) {
  let max = 0;
  let count = 0;
  let vowles = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < s.length; i++) {
      if (vowles.includes(s[i])) {
          count++;
      }
      if (i >= k && vowles.includes(s[i - k])) {
          count--;
      }
      max = Math.max(max, count);
  }
  return max;
};

console.log(maxVowels('abciiidef', 3));
