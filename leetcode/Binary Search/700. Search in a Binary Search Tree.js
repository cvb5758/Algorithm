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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function (root, val) {
  const result = (node) => {
    if (!node) return null;
    if (node.val === val) return node;
    if (node.val > val) {
      return result(node.left);
    } else {
      return result(node.right);
    }
  };

  return result(root);
};
