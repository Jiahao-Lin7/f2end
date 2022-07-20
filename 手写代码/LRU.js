// least recently used 
// LRU 最近最少使用就淘汰算法、缓存淘汰策略：大体原理就是将使用时间距离现在最久的那条记录替换掉，比如 keep-alive。
// 最近被使用或访问的数据放置在最前面
// 每当缓存命中（即缓存数据被访问），则将数据移到头部
// 当缓存数量达到最大值时，将最近最少访问的数据剔除
var LRUCache = function(capacity) {
    this.max = capacity
    this.map = new Map()
  }
  LRUCache.prototype.get = function(key) {
    // 删除并更新为新
    if (this.map.has(key)) {
      let val = this.map.get(key)
      // 先删后赋值保证长度不会超出
      this.map.delete(key)
      this.map.set(key, val)
      return value
    } else {
      return -1
    }
  }
  LRUCache.prototype.put = function(key, val) {
    // 先删后赋值保证长度不会超出
    if (this.map.has(key)) {
      this.map.delete(key)
    }
    this.map.set(key, val)
    if (this.map.size > this.max) {
      this.map.delete(this.map.keys().next().value)
    }
  }