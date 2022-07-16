// function flat(arr){
//     let res = []
//     // let map = new Map()
//     // map.set(arr,1)
//     for(let i = 0; i < arr.length; i++){
//         if(!Array.isArray(arr[i])){
//             res.push(arr[i])
//         }else{
//             // if(!map.has(arr[i])){
//             //     res = res.concat(flat(arr[i]))
//             // }
//             res = res.concat(flat(arr[i]))
//         }
//     }
//     return res
// }

// let arr1 = [1,'2',[{a:'a',b:'b'},23]]
// // let arr2 = [1,2,3,arr1]
// // arr1.push(arr2)
// console.log(flat(arr1));

// var nextPermutation = function(nums) {
//     let visited = []
//     let res = nums
//     res.sort((a,b) => a-b)
//     let temp = []
//     let ans = []
//     function fn(nums,i,n,visited,ans,temp){
//         if(i === n){
//             ans.push(temp)
//         }
//         for(let j = 0; j < nums.length; j++){
//             if(visited[j]){
//                 continue
//             }
//             visited[j] = true
//             temp.push(nums[i])
//             fn(nums,i+1,n,visited,ans,temp)
//             temp.pop()
//             visited[j] = false
//         }
//         return ans
//     }
//     ans = fn(res,0,res.length,visited,ans,temp)
//     for(let i = 1;i < ans.length; i++){
//         if(ans[i-1] === nums){
//             return ans[i]
//         } 
//     }
//     return ans[0]
// };

// console.log(NaN === NaN)
// console.log([1,2,3,4,5].splice(1,2,3,4,5))
// console.log(parseInt('0x111'))
// console.log(undefined === undefined);
// arr = [1,2,6,8,4,9,5,3]
// console.log(arr.findIndex(x => x === 6));

function curry(func) {
    return function curried(...args) {
      // 关键知识点：function.length 用来获取函数的形参个数
      // 补充：arguments.length 获取的是实参个数
      if (args.length >= func.length) {
        console.log('there')
        return func.apply(this, args)
      }
      return function (...args2) {
        return curried.apply(this, args.concat(args2)) // 生成新的函数并调用，这里的新函数即 curried
      }
    }
  }
  
  // 测试
  function sum (a, b, c) {
    return a + b + c
  }
  const curriedSum = curry(sum)
  console.log(curriedSum(1, 2, 3))
  console.log(curriedSum(1)(2,3))
  console.log(curriedSum(1)(2)(3))
  
  