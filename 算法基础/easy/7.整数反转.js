/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转
 * 输入: -123 
 * 输出: -321
 * 输入: 120
 * 输出: 21
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2**31,  2**31 − 1]
 * 请根据这个假设，如果反转后整数溢出那么就返回 0
 */
var reverse = function(x) {
  let now = 0, old = Math.abs(x)
  while(old > 0) {
    now = now * 10 + old % 10
    old = Math.floor(old / 10)
  }
  return x < 0 ? (now >= 2 ** 31 ? 0 : -now) : (now >= 2 ** 31 ? 0 : now)
}
module.exports = {
  reverse: reverse
}