/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let max = 0;

  let left = 0;
  let right = height.length - 1;

  for (let i = 0; i < height.length; i++) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
