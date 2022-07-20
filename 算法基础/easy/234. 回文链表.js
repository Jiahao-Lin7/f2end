/**
 * 请判断一个链表是否为回文链表
 * 输入: 1->2
 * 输出: false
 * 输入: 1->2->2->1
 * 输出: true
 * 进阶: 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题
 */

// PS：这个就是进阶答案，记得还原链表
var isPalindrome = function(head) {
  // 反序列化
  let reverse = function(pre, cur) {
    if (!cur) return pre
    let next = cur.next
    cur.next = pre
    return reverse(cur, next)
  }
  let dummyHead = fast = slow = new ListNode()
  dummyHead.next = head
  // 找链表中间节点
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let next = slow.next // 记录中点后面的链表，准备反序链表
  slow.next = null // 中点处断开 
  let newStart = reverse(null, next) // 从 next 开始反序
  // 逐一判断
  for (let p1=head, p2=newStart; p2!==null; p1=p1.next, p2=p2.next) {
    if (p1.val !== p2.val) return false
  }
  // 缺少一个还原链表的步骤
  // 待补充
  return true
}