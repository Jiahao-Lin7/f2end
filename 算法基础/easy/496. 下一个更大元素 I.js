/**
 * 给定两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值
 * nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1
 * 输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
 * 输出: [-1,3,-1]
 * 输入: nums1 = [2,4], nums2 = [1,2,3,4].
 * 输出: [3,-1]
 */
var nextGreaterElement = function(nums1, nums2) {
  let res = []
  for (let i=0; i<nums1.length; i++) {
    let idx = nums2.indexOf(nums1[i])
    let key = nums2.findIndex((item, index) => item > nums1[i] && index > idx)
    key === -1 ? res.push(key) : res.push(nums2[key])
  }
  return res
}