// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // Iterative sol
    // Time: O(n)
    // Space: O(1)
    let previousNode = null;

    while (head !== null) {
        const nextNode = head.next;
        head.next = previousNode;
        previousNode = head;
        head = nextNode;
    }

    return previousNode;
};

// RECURSIVE SOL - goes to the very end, then reverses
// var reverseList = function(head) {
//     // Special case...
//     if (head == null || head.next == null) {
//         return head;
//     }
//     // Create a new node to call the function recursively and we get the reverse linked list...
//     const newHead = reverseList(head.next);
//     // Set head node as head.next.next...
//     head.next.next = head;
//     //set head's next to be null...
//     head.next = null;
//     return newHead;     // Return the reverse linked list...
// };

// RECURSIVE SOL That seems more intuitive - Reverses as it goes down the list
// var reverseList = function(head) {
//     const reverse = function(currentNode, previousNode) {
//         if (currentNode === null) {
//             return previousNode;
//         } else {
//             const nextNode = currentNode.next;
//             currentNode.next = previousNode;
//             return reverse(nextNode, currentNode);
//         }
//     };

//     return reverse(head, null);
// };