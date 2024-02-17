/**
 * @param {number[][]} grid
 * @return {number}
 */
const equalPairs = function (grid) {
  if (grid.length === 0) return 0;

  let rows = {};
  let cols = {};
  let count = 0;

  grid.forEach((val, idx) => (rows[idx] = val.toString()));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (cols[j]) {
        cols[j] += ',' + grid[i][j].toString();
      } else {
        cols[j] = grid[i][j].toString();
      }
    }
  }

  for (let keyr in rows) {
    for (let keyc in cols) {
      if (rows[keyr] === cols[keyc]) {
        count++;
      }
    }
  }

  return count;
};

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
);
