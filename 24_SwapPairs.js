/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * n1 = p.next
 * n2 = p.next.next
 * p.next = n2
 * n1.next = n2.next
 * n2.next = n1
 * p = n1
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummy = new ListNode();
  dummy.next = head;
  let p = dummy;

  while (p.next !== null && p.next.next !== null) {
    let n1 = p.next;
    let n2 = p.next.next;
    p.next = n2;
    n1.next = n2.next;
    n2.next = n1;
    p = n1;
  }
  return dummy.next;
};
