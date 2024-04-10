/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function (rooms) {
  const visited = new Set();

  const dfs = (room) => {
    if (visited.has(room)) return;
    visited.add(room);
    // console.log(visited, room, rooms[room]);
    for (let key of rooms[room]) {
      console.log(key, rooms[room]);
      dfs(key);
    }
  };

  dfs(0);
  return visited.size === rooms.length;
};

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])); // true
