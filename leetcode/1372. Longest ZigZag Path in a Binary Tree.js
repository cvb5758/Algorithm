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
var longestZigZag = function (root) {
  let max = 0;

  const dfs = (node, isLeft, count) => {
    if (!node) return;
    max = Math.max(max, count);
    if (isLeft) {
      dfs(node.left, false, count + 1);
      dfs(node.right, true, 1);
    } else {
      dfs(node.right, true, count + 1);
      dfs(node.left, false, 1);
    }
  };

  dfs(root, true, 0);

  return max;
};
