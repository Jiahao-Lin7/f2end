var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2).sort((a,b) => a - b),len = arr.length;
    return len % 2 == 0 ? (arr[len / 2] + arr[(len / 2 - 1)]) / 2 : arr[(len - 1) / 2]
};