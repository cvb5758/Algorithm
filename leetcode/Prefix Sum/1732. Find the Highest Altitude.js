/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < gain.length; i++) {
    sum += gain[i];
    max = Math.max(max, sum);
  }

  return max > 0 ? max : 0;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
