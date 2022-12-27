/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * have a dummy head
 * while l1 && l2 !== null, compare l1.val < l2.val, curr.next = l1
 * if l1, l2 = null, curr.next = l1 || l2
 * return dummy.next
 */


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let curr = new ListNode();
    let dummy = curr;
    while (list1 !== null && list2 !== null){
        if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    if (list1 !== null) {
        curr.next = list1;
    }

    if (list2 !== null) {
        curr.next = list2;
    }

    return dummy.next;
};