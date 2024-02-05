/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function (asteroids) {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0) {
      stack.push(asteroids[i]);
    } else {
      while (
        stack.length &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(asteroids[i])
      ) {
        stack.pop();
      }

      if (stack.length && stack[stack.length - 1] === Math.abs(asteroids[i])) {
        stack.pop();
      } else if (!stack.length || stack[stack.length - 1] < 0) {
        stack.push(asteroids[i]);
      }
    }
  }

  return stack;
};

console.log(asteroidCollision([5, 10, -5])); // [5, 10]
console.log(asteroidCollision([10, 2, -5])); // []
