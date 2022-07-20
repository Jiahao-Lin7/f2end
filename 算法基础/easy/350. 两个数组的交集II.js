/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2,2]
 * 
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 */
var intersection = function(nums1, nums2) {
    let hash = new Map(), res = []
    for (let i=0; i<nums1.length; i++) {
      let num = hash.get(nums1[i])
      if (!num) {
        hash.set(nums1[i], 1)
      } else {
        hash.set(nums1[i], num+1)
      }
    }
    for (let i=0; i<nums2.length; i++) {
      let num = hash.get(nums2[j])
      if (num) {
        res.push(nums2[j])
        if (num > 1) {
          hash.set(nums2[j], num-1)
        } else {
          hash.delete(nums2[j])
        }
      }
    }
    return res
}