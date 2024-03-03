/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function(isConnected) {
  const visited = new Set();

  const dfs = (city) => {
    if (visited.has(city)) return;
    visited.add(city);
    for (let i = 0; i < isConnected.length; i++) {
      if (isConnected[city][i] === 1) {
        dfs(i);
      }
    }
  };

  let provinces = 0;
  for (let i = 0; i < isConnected.length; i++) {
    if (!visited.has(i)) {
      provinces++;
      dfs(i);
    }
  }

  return provinces;
};