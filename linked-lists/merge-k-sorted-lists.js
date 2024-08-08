// 23. Merge k Sorted Lists

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []

// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // Time: O(NLogK)
    // Space: O(1) - however, what I dont like about this is that we are modifying the original 'lists' input

    // Notes: somewhat like merge sort to divide and conquer the problem space
    // Draw out a brute force approach where each iteration merges one list at a time UNTIL THERE IS ONE LIST - O(nk)
    // Then draw out the divide and conquer approach where each iteration merges two lists at a time UNTIL THERE IS ONE LIST - O(nlogk)
    // Notice the depth - particularly how much smaller the depth is for the divide and conquer approach
    if (lists.length === 0) {
        return null;
    }

    while (lists.length > 1) {
        const mergedLists = [];

        for (let i = 0; i < lists.length; i = i + 2) {
            const list1 = lists[i];
            const list2 = i + 1 < lists.length ? lists[i + 1] : null;
            const mergedList = mergeTwoLists(list1, list2);

            mergedLists.push(mergedList);
        }

        lists = mergedLists;
    }

    return lists[0];
};

var mergeTwoLists = function(list1, list2) {
    const dummyNode = new ListNode();
    let tail = dummyNode;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    if (list1) {
        tail.next = list1;
    }
    
    if (list2) {
        tail.next = list2;
    }

    return dummyNode.next;
};