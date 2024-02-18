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
 * @return {number[]}
 */
const rightSideView = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  const bfs = (node) => {
    const next = [];
    for (let i = 0; i < node.length; i++) {
      if (node[i].left) next.push(node[i].left);
      if (node[i].right) next.push(node[i].right);
    }
    if (next.length > 0) result.push(next[next.length - 1].val);
    if (next.length > 0) bfs(next);
  };

  result.push(root.val);
  bfs(queue);

  return result;
};
