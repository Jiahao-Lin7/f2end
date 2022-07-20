/**
 * 班上有 N 名学生。其中有些人是朋友，有些则不是。他们的友谊具有是传递性。如果已知 A 是 B 的朋友，B 是 C 的朋友，那么我们可以认为 A 也是 C 的朋友。所谓的朋友圈，是指所有朋友的集合。

给定一个 N * N 的矩阵 M，表示班级中学生之间的朋友关系。如果M[i][j] = 1，表示已知第 i 个和 j 个学生互为朋友关系，否则为不知道。你必须输出所有学生中的已知的朋友圈总数
输入：
[[1,1,0],
 [1,1,0],
 [0,0,1]]
输出：2 
解释：已知学生 0 和学生 1 互为朋友，他们在一个朋友圈。
第2个学生自己在一个朋友圈。所以返回 2

注意：这个dp 其实有一半数据是重复的
 */
var findCircleNum = function(M) {
  let n = M.length
  if (n === 0) return n
  let count = 0
  let dfs = (i) => {
    for (let j=0; j<n; j++) {
      if (M[i][j] === 1 && !visited[j]) {
        visited[j] = true
        dfs(j)
      }
    }
  }
  let visited = {}
  for (let i=0; i<n; i++) {
    if (!visited[i]) {
      dfs(i)
      count++
    }
  }
  return count
}