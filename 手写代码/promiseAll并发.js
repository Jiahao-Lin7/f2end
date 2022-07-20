// 模仿一个fetch的异步函数，返回promise
function mockFetch(param) {
    return new Promise((resovle) => {
      setTimeout(() => {
        resovle(param);
      }, 2000);
    });
  }
  
  function limitedRequest(urls, maxNum) {
    const pool = [];
    // 处理maxNum比urls.length 还要大的情况。
    const initSize = Math.min(urls.length, maxNum);
    for (let i = 0; i < initSize; i++) {
        // 一次性放入初始的个数
      pool.push(run(urls.splice(0, 1)));
    }
    // r 代表promise完成的resolve回调函数
    // r 函数无论什么样的结果都返回promise，来确保最终promise.all可以正确执行
    function r() {
      console.log('当前并发度：', pool.length);
      if (urls.length === 0) {
        console.log('并发请求已经全部发起');
        return Promise.resolve();
      }
      return run(urls.splice(0, 1));
    }
    // 调用一次请求
    function run(url) {
      return mockFetch(url).then(r);
    }
    // 全部请求完成的回调
    Promise.all(pool).then(() => {
      console.log('请求已经全部结束');
    });
  }
  // 函数调用
  limitedRequest([1, 2, 3, 4, 5, 6, 7, 8], 3);
  