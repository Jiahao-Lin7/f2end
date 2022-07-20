/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
 * @param {*} n 
 */

/**
 * 类似 fibonacci
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let f = []
  f[0] = 1
  f[1] = 1
  for (let i=2; i<=n; i++) {
      f[i] = f[i-1] + f[i-2] // 动态规划
  }
  return f[n]
};