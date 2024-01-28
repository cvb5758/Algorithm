/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function (nums) {
  let left = 0;
  let max = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    }
    while (count > 1) {
      if (nums[left] === 0) {
        count--;
      }
      left++;
    }
    max = Math.max(max, i - left);
  }
  return max;
};

console.log(longestSubarray([1, 1, 0, 1]));
