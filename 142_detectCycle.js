/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head === null){
        return null;
    }
    let fast = head, slow = head, isCycle = false;
    while(fast.next !== null && fast.next.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast){
            isCycle = true;
            break;
        }
    }
    if(!isCycle){
        return null;
    }

    fast = head;
    while(slow !== fast){
        slow = slow.next;
        fast = fast.next;
    }

    return fast;
};