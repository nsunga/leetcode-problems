// 143. Reorder List

// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:

// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
 
// Constraints:

// The number of nodes in the list is in the range [1, 5 * 104].
// 1 <= Node.val <= 1000

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slowpointer = head;
    let fastpointer = head.next;

    // find the half way point in the list
    // why fastpointer && fastpointer.next and not fastpointer || fastpointer.next?
    // lets say fastpointer is null -> fastpointer.next would yield nullpointerexception
    // or if incorrect, you are accessing 'next' from 'null' but 'null' has no property 'next'
    while (fastpointer && fastpointer.next) {
        slowpointer = slowpointer.next;
        fastpointer = fastpointer.next.next;
    }

    let secondlist = slowpointer.next;

    // slowpointer.next needs to be set to null
    // slowpointer node belongs to the first half
    // of the list - we need to break the first
    // and second halves connection
    slowpointer.next = null;
    let previousNode = null;

    while (secondlist) {
        const tempNode = secondlist.next;
        secondlist.next = previousNode;
        previousNode = secondlist;
        secondlist = tempNode;
    }

    // after reversing the second half of the list
    // secondlist will be pointing to null
    // previousNode will be the last node in the second half of the list
    secondlist = previousNode;
    let firstlist = head;

    // we conditionally use the secondList to merge because
    // the firstlist can potentially be greater in size
    // than the secondlist. ie. if the secondlist is odd
    // on the last iteration, the last node that is appended
    // from the firstlist will still have the connections
    // to any remaining nodes in the first list
    while (secondlist) {
        const tempNodeFirstList = firstlist.next;
        const tempNodeSecondList = secondlist.next;

        firstlist.next = secondlist;
        secondlist.next = tempNodeFirstList;
        firstlist = tempNodeFirstList;
        secondlist = tempNodeSecondList;
    }
};