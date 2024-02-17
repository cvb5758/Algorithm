/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  let word1map = {};
  let word2map = {};

  for (let i = 0; i < word1.length; i++) {
    word1map[word1[i]] = word1map[word1[i]] + 1 || 1;
    word2map[word2[i]] = word2map[word2[i]] + 1 || 1;
  }

  for (let i = 0; i < word1.length; i++) {
    if (!word2map[word1[i]]) return false;
  }

  let arr1 = Object.values(word1map).sort((a, b) => a - b);
  let arr2 = Object.values(word2map).sort((a, b) => a - b);

  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

console.log(closeStrings('abc', 'bca'));
// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {boolean}
//  */
// const closeStrings = function (word1, word2) {
//   let freq1 = new Array(26).fill(0);
//   let freq2 = new Array(26).fill(0);

//   for (let ch of word1) {
//     freq1[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
//   }

//   for (let ch of word2) {
//     freq2[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
//   }

//   console.log(freq1, freq2);

//   for (let i = 0; i < 26; i++) {
//     if (
//       (freq1[i] === 0 && freq2[i] !== 0) ||
//       (freq1[i] !== 0 && freq2[i] === 0)
//     ) {
//       return false;
//     }
//   }

//   freq1.sort((a, b) => a - b);
//   freq2.sort((a, b) => a - b);

//   for (let i = 0; i < 26; i++) {
//     if (freq1[i] !== freq2[i]) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(closeStrings('abc', 'bca'));
