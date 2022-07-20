/**
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

 初始化 nums1 和 nums2 的元素数量分别为 m 和 n
 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素
 输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3
输出: [1,2,2,3,5,6]
 */

// 解题思路即：反过来排序，先排列最大的，num2 若有剩下就从前面覆盖排序后的 num1。
// 题目梳理：num1 有足够空间存 num2，注意是整个 num2，所以若比较完，num2 还有剩余需要覆盖 num1

var merge = function(nums1, m, nums2, n) {
  while(m>0 && n>0) {
    console.log(nums1[m-1], nums2[n-1])
    if (nums1[m-1] > nums2[n-1]) {
      nums1[m+n-1] = nums1[m-1]
      m--
    } else {
      num1[m+n-1] = nums2[n-1]
      n--
    }
  }
  if (m===0) { // 假如 nums2 还有则覆盖，因为大的比完了，所以覆盖小的
    console.log(n)
    for (let i=0; i<n; i++) {
      nums1[i] = nums2[i]
    }
  }
  console.log(nums1)
}
let num1 = [18,18,18,0,0,0], m = 3, 
num2 = [2,6,6,8,9,10,11], n = 7
merge(num1, m, num2, n)