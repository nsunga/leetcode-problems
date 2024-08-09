// 25. Reverse Nodes in k-Group

// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]
 
// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000

// Follow-up: Can you solve the problem in O(1) extra memory space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // Time: O(n)
    // Space: O(1)
    const dummy = new ListNode(0, head);
    let groupPrev = dummy;

    while (true) {
        const kthNode = getKthNode(groupPrev, k);
        console.log('kth node: ', kthNode ? kthNode.val : null);

        if (kthNode === null) {
            break;
        }

        const groupNext = kthNode.next;

        // reverse group
        let prev = kthNode.next;
        let curr = groupPrev.next;

        // what is the outcome of reversing one group?
        // 1 -> 2 -> 3 -> 4 k = 2
        // One iteration
        // 1 -> 3 -> 4
        // 2 ---^ // curr is at 2, prev is 1, groupNext is 3
        // Two iteration
        // 2 -> 1 -> 3 -> 4 // curr is at 3, prev is at 2 groupNext is 3 and we break
        while (curr !== groupNext) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        console.log('groupPrev before: ', groupPrev.val);
        const temp = groupPrev.next;
        groupPrev.next = kthNode;
        groupPrev = temp;
        console.log('groupPrev after: ', groupPrev.val);
    }

    return dummy.next;
};

var getKthNode = function(curr, k) {
    while (curr !== null && k > 0) {
        curr = curr.next;
        k = k - 1;
    }

    return curr;
};