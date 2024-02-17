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
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = function (root, targetSum) {
  const dfs = (node, sum) => {
    if (!node) return 0;
    sum -= node.val;
    return (sum === 0 ? 1 : 0) + dfs(node.left, sum) + dfs(node.right, sum);
  };

  const pre = (node) => {
    if (!node) return 0;
    return dfs(node, targetSum) + pre(node.left) + pre(node.right);
  };

  return pre(root);
};
