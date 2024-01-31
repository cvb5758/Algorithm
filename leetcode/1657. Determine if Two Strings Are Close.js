/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function (word1, word2) {
  let map1 = new Map();
  let map2 = new Map();
  let set1 = new Set();
  let set2 = new Set();

  for (let i of word1) {
    map1.set(i, map1.get(i) + 1 || 1);
    set1.add(i);
  }
  for (let i of word2) {
    map2.set(i, map2.get(i) + 1 || 1);
    set2.add(i);
  }
  console.log(map1, map2, set1, set2);

  for (let i of map1.keys()) {
    if (!map2.has(i)) return false;
  }

  if (map1.size !== map2.size) {
    return false;
  }

  let arr1 = [...map1.values()].sort((a, b) => a - b);
  let arr2 = [...map2.values()].sort((a, b) => a - b);

  console.log(arr1, arr2);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return set1.size === set2.size;
};

console.log(closeStrings('uau', 'ssx'));
