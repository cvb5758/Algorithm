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
const goodNodes = function (root) {
  const leaf = [];

  const dfs = (node, max) => {
    if (!node) return;
    if (node.val >= max) {
      leaf.push(node.val);
      max = node.val;
    }
    dfs(node.left, max);
    dfs(node.right, max);
  };

  dfs(root, root.val);

  return leaf.length;
};
