/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function (candies, extraCandies) {
  const result = candies.map((candy) => {
    return candy + extraCandies >= Math.max(...candies);
  });

  return result;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
