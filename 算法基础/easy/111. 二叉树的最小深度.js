/**
 * 给定一个二叉树，找出其最小深度。
最小深度是从根节点到最近叶子节点的最短路径上的节点数量
[3,9,20,null,null,15,7]
 * 解：2
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0
  let level = 0, stack = [root]
  while (stack.length) {
    let size = stack.length // 最多2
    while (size--) {
      let pre = stack.shift()
      // 没有左右子树就终结
      if (!pre.left && !pre.right) return level+1
      if (pre.left) stack.push(pre.left)
      if (pre.right) stack.push(pre.right)
    }
    level++
  }
  return level
};



// 思路不要偏，不要只想着单边少，判断一边有一边没有，不过有空可以尝试一下。
