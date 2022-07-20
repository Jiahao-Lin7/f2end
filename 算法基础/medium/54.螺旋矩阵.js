/**
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素
 * 输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  // 转圈圈
  // 顺时针四个方向分别为 right down left up
  // 顺时针边界 boundr boundd boundl boundu
  // 路径长度 m * n
  // 行列 i j
  // 特判
  let m = matrix.length
  if (m === 0) return []
  let n = matrix[0].length
  let i=0, j=0
  // 判断起始方向
  let dir = n === 1 ? 'd' : 'r'
  let boundr = n - 1
  let boundd = m - 1
  let boundl = 0
  let boundu = 0
  let res = []
  for (let a=0; a<m*n; a++) {
      res.push(matrix[i][j])
      if (dir === 'r') {
          j++
          if (j === boundr) {
              boundu++
              dir = 'd'
          }
      } else if (dir === 'd') {
          i++
          if (i === boundd) {
              boundr--
              dir = 'l'
          }
      } else if (dir === 'l') {
          j--
          if (j === boundl) {
              boundd--
              dir = 'u'
          }
      } else {
          i--
          if (i === boundu) {
              boundl++
              dir = 'r'
          }
      }
  }
  return res
};