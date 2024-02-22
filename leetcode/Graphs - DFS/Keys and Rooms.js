/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function (rooms) {
  const visited = new Set();

  const dfs = (room) => {
    if (visited.has(room)) return;
    visited.add(room);
    for (let key of rooms[room]) {
      dfs(key);
    }
  };

  dfs(0);
  return visited.size === rooms.length;
};

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
