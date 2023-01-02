/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getListLen = function(head) {
    let len = 0, cur = head;
    while(cur) {
        len++;
        cur = cur.next;
    }
    return len;
}

var getIntersectionNode = function(headA, headB) {
    let n1 = headA, n2 = headB,
        lenA = getListLen(headA),
        lenB = getListLen(headB); // length of a linked list
    if (lenA < lenB) { // 让curA为最长链表的头，lenA为其长度
        [n1, n2] = [n2, n1]; // 交换变量注意加 “分号” ，两个数组交换变量在同一个作用域下时
        [lenA, lenB] = [lenB, lenA] // 如果不加分号，下面两条代码等同于一条代码: [curA, curB] = [lenB, lenA]
    }
    let i = lenA - lenB;
    while (i-- > 0) {
        n1 = n1.next;
    } //到同一起点
    while (n1 && n1 !== n2) {
        n1 = n1.next;
        n2 = n2.next;
    }
    return n1;
};

//solutin 2
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let n1 = headA, n2 = headB; //保留头部指针
    while (n1 !== n2) {
        if (n1 === null){
            n1 = headB;
        }else{
            n1 = n1.next;
        }

        if (n2 === null){
            n2 = headA;
        }else{
            n2 = n2.next;
        }
    } 
    return n1;
}