/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function (nums) {
    let visited = []
    let res = nums
    res.sort((a, b) => a - b)
    let temp = []
    let ans = []
    var fn = function(nums, i, n, visited,ans,temp) {
      if (i === n) {
        ans.push(temp.join(''))
      }
      for (let j = 0; j < nums.length; j++) {
        if (visited[j]) {
          continue
        }
        visited[j] = true
        temp.push(nums[j])
        fn(nums, i + 1, n, visited,ans,temp)
        temp.pop()
        visited[j] = false
      }
      return ans
    }
    ans = fn(res, 0, res.length, visited,ans,temp)
    for (let i = 1; i < ans.length; i++) {
      if (ans[i - 1] === nums.join('')) {
        return ans[i].split('')
      }
    }
    return ans[0].split('')
  };
  console.log(nextPermutation([1,2,3])) 

var number = 122311643616.161615
console.log(number.toLocaleString('en'));
console.log(typeof window === 'undefined' ? 'node': 'browser');

function curry(fn, args) {
  // 获取函数需要的参数长度
  let length = fn.length;

  args = args || [];

  return function() {
    let subArgs = args.slice(0);

    // 拼接得到现有的所有参数
    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i]);
    }

    // 判断参数的长度是否已经满足函数所需参数的长度
    if (subArgs.length >= length) {
      // 如果满足，执行函数
      return fn.apply(this, subArgs);
    } else {
      // 如果不满足，递归返回科里化的函数，等待参数的传入
      return curry.call(this, fn, subArgs);
    }
  };
}

var fn = curry(function(a, b, c) {
  console.log([a, b, c]);
});
fn("a")("b", "c")