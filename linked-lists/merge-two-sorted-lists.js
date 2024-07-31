// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Time: O(n) where n is whichever is the longest of list1 or list2
    // Space: O(1)
    let dummyNode = new ListNode();
    // we need to keep a reference to the start of the merged list
    const head = dummyNode;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            dummyNode.next = list1;
            list1 = list1.next;
        } else {
            dummyNode.next = list2;
            list2 = list2.next;
        }

        dummyNode = dummyNode.next;
    }

    if (list1) {
        dummyNode.next = list1;
    } else if (list2) {
        dummyNode.next = list2;
    }

    // Remember, we are at a value of null
    // The real start of the merged list is at head.next
    return head.next;
};