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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function (root, key) {
  const result = (node, key) => {
    if (!node) return null;
    if (node.val === key) {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let temp = node.right;
      while (temp.left) temp = temp.left;
      node.val = temp.val;
      node.right = result(node.right, temp.val);
    } else if (node.val > key) {
      node.left = result(node.left, key);
    } else {
      node.right = result(node.right, key);
    }
    return node;
  };

  return result(root, key);
};
