/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function (root1, root2) {
  const leaf1 = [];
  const leaf2 = [];

  const dfs = (node, leaf) => {
    if (!node) return;
    if (!node.left && !node.right) {
      leaf.push(node.val);
      return;
    }
    dfs(node.left, leaf);
    dfs(node.right, leaf);
  };

  dfs(root1, leaf1);
  dfs(root2, leaf2);

  if (JSON.stringify(leaf1) === JSON.stringify(leaf2)) return true;

  return false;
};
