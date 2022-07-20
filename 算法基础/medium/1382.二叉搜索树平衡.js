/**
 * 给你一棵二叉搜索树，请你返回一棵 平衡后 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。

如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是 平衡的 
 */
// 题解：中序遍历使数组升序然后配合108题。
var zhongxu = function (root) {
  let arr = []
  let fn = function (node) {
    if (!node) return;
    fn(node.left)
    arr.push(node.val)
    fn(node.right)
  }
  fn(root)
  return arr
}