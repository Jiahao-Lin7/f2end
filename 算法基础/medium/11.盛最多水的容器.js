/**
给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
输入：[1,8,6,2,5,4,8,3,7]
输出：49
 */

// 思路就是从边界计算面积，然后比较两边，低的缩小边界，高的能维持最大容量
var maxArea = function(height) {
  let left = 0, right = height.length - 1, max = 0
  while(left < right) {
    let content = (right-left) * Math.min(height[left], height[right])
    if (content > max) max = content
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return max
}