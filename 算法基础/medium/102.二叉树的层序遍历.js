/**
 * 二叉树：[3,9,20,null,null,15,7]
 * [
  [3],
  [9,20],
  [15,7]
]
求层序、锯齿、层数
 */
var levelOrder = function(root) {
  if (!root) return []
  let res=[], queue=[], level=0
  queue.push(root)
  while(queue.length) {
    res.push([]) // 当前层初始化
    let size = queue.length
    while(size--) { // 将 queue 倾销
      let cur = queue.shift()
      res[level].push(cur.val)
      if (cur.left) queue.push(cur.left) // 左右补充
      if (cur.right) queue.push(cur.right)
    }
    // 输出锯齿：先从左往右，再从右往左进行下一层遍历
    // if (level%2) res[level].reverse() //  取余反转即可
    // 顺便求 level
    level++
  } 
  return res
}