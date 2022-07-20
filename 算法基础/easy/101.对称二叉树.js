/**
 * 给定一个二叉树，检查它是否是镜像对称的
 * 二叉树 [1,2,2,3,4,4,3] 是对称的
 * 1
 * 22
 * 3443
 * [1,2,2,null,3,null,3]
 * 1
 * 22
 * null 3 null 3
 */
var isSymmetric = function(root) {
  //init
  if (!root) return true
  let queue = [root.left, root.right] // 对称存储，先进先出
  let node1, node2

  while(queue.length) {
    node1 = queue.shift()
    node2 = queue.shift()
    if (!node1 && !node2) continue // 也算对称，进行一轮 shift
    if (!node1 || !node2 || node1.val !== node2.val) return false // 回归树的本质，比较 val 是否相等
    queue.push(node1.left)
    queue.push(node2.right) // 对称存储，外与外比较
    queue.push(node1.right)
    queue.push(node2.left) // 内与内比较
  }
  return true
}