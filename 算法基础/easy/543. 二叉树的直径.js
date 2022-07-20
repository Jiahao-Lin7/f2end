/**
 *        1
         / \
        2   3
       / \     
      4   5 
      返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
 */
var diameterOfBinaryTree = function(root) {
  let ans = 1 // 节点数
  let depth = function(root) {
    if (!root) return 0
    let left = depth(root.left)
    let right = depth(root.right)
    // 左右两边+根节点一起算
    ans = Math.max(left+right+1, ans)
    return Math.max(left, right) + 1
  }
  depth(root)
  return ans-1
}