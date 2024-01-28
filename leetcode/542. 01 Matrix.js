/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

let directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let updateMatrix = function (mat) {
  let row = mat.length;
  let col = mat[0].length;
  let queue = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = -1;
      }
    }
  }
  while (queue.length) {
    let [x, y] = queue.shift();
    for (let [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;
      if (mat[nx] === undefined || mat[nx][ny] === undefined) {
        continue;
      }
      if (mat[nx][ny] !== -1) {
        continue;
      }
      mat[nx][ny] = mat[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
  return mat;
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
);
