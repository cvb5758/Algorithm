/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function (nums1, nums2) {
  let num1 = new Set(nums1);
  let num2 = new Set(nums2);

  for (let i of num1) {
    if (num2.has(i)) {
      num1.delete(i);
      num2.delete(i);
    }
  }
  return [[...num1], [...num2]];
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
