/**
 * 使用栈实现队列的下列操作：

push(x) -- 将一个元素放入队列的尾部。
pop() -- 从队列首部移除元素。
peek() -- 返回队列首部的元素。
empty() -- 返回队列是否为空

栈：先进后出
队列：先进先出
 */
class MyQueue {
  constructor() {
    this.pushArr = []
    this.popArr = []
  }
}
MyQueue.prototype.push = (value) => {
  this.pushArr.push(value)
}
// 队首移除，暂存在 popArr 中，再恢复
MyQueue.prototype.pop = () => {
  while(this.pushArr.length !== 0) {
    this.popArr.push(this.pushArr.pop())
  }
  let popEle = this.popArr.pop()
  while(this.popArr.length !== 0) {
    this.pushArr.push(this.popArr.pop())
  }
  return popEle
}
MyQueue.prototype.peek = function() {
  return this.pushArr.length ? this.pushArr[0] : undefined
}
MyQueue.prototype.empty= () => {
  return !this.pushArr.length
}