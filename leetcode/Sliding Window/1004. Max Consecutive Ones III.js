/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function (nums, k) {
  let left = 0;
  let max = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
      console.log('count :' + count);
    }
    while (count > k) {
      if (nums[left] === 0) {
        count--;
        console.log('count :' + count);
      }
      left++;
      console.log('left :' + left);
    }
    max = Math.max(max, i - left + 1);
    console.log('max :' + max);
  }
  return max;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
