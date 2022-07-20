/**
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值
 * 输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
 */
var rightSideView = function(root) {
  if (!root) return []
  let res = [], stack = [root]
  while (stack.length) {
    res.push(stack[0].val)
    let size = stack.length
    while (size--) {
      let node = stack.shift() // 依次从头取出
      if (node.right) stack.push(node.right) // 先右子树
      if (node.left) stack.push(node.left)
    }
  }
  return res
}