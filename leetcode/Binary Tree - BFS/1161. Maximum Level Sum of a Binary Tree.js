/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxLevelSum = function (root) {
  let max = -Infinity;
  let result = 1;
  let level = 0;

  const queue = [root];

  while (queue.length > 0) {
    let sum = 0;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    level++;
    if (sum > max) {
      max = sum;
      result = level;
    }
  }

  return result;
};
