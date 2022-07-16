var findNumberOfLIS = function(nums) {
    let n = nums.length
    if (n <= 1) return n
    let dp = new Array(n).fill(1), count = new Array(n).fill(1) // 至少为1
    let maxLen = 1
    for (let i=1; i<n; i++) {
        for (let j=0; j<i; j++) {
            if (nums[j] < nums[i]) { // 递增的
                if (dp[j] >= dp[i]) { // 这里判定要注意初始化时都为1，所以第一次比较会出现等于的情况
                    dp[i] = dp[j]+1
                    count[i] = count[j]
                } else if (dp[j]+1 === dp[i]) { // 这里也要注意：if 条件表明 > 1 次了
                    count[i] += count[j]
                }
            }
        }
        maxLen = Math.max(maxLen, dp[i])
    }
    let res = 0
    for (let i=0; i<n; i++) {
        if (dp[i] === maxLen) {
            res += count[i]
        }
    }
    return res
  };
  console.log(findNumberOfLIS([1,3,5,4,7]))