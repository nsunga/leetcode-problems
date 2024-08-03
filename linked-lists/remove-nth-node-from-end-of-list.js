// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // we use a dummynode to keep the leftpointer at a distance of n + 1
    // distance of n + 1 makes it easy to skip the nth node
    const dummynode = new ListNode(0, head);
    let leftpointer = dummynode;
    let rightpointer = head;

    // move the rightpointer n nodes from the head position
    for (let i = 0; i < n; i = i + 1) {
        rightpointer = rightpointer.next;
    }

    // move left and right pointers until rightpointer reaches null/past the list
    // the distance between leftpointer and rightpointer will be a distance of n + 1
    // this is the distance at the tail end of the list
    while (rightpointer) {
        rightpointer = rightpointer.next;
        leftpointer = leftpointer.next;
    }

    // remove the nth node from the end of the list
    leftpointer.next = leftpointer.next.next;

    return dummynode.next;
};