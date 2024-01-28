/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
      nums.splice(i, 1);
      i--;
    }
  }

  nums.push(...new Array(zeroCount).fill(0));

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
