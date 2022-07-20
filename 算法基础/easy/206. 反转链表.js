/**
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 */
function reverseList (head) {
  // 两个指针
  let pre = null, cur = head
  while(cur) {
    // let tmp = cur.next
    // cur.next = pre
    // pre = cur
    // cur = tmp
    // cur.next 原本是头节点，指向 null，恰好倒过来，满足题意，然后指针右移。
    [cur.next, pre, cur] = [pre, cur, cur.next]
  }
  return pre
}