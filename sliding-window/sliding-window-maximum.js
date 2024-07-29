// 239. Sliding Window Maximum

// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 
// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // Time: O(n)
    const result = [];
    const deque = []; // storing indices of array nums
    let [left, right] = [0, 0];

    while (right < nums.length) {
        // we can only push at the end of the deque
        // when items ahead are all greater than the
        // current item that is intended to be pushed
        //
        // this is a monotonic decreasing queue
        while (deque.length && nums[deque[deque.length - 1]] < nums[right]) {
            deque.pop();
        }

        deque.push(right);

        // we shift the first element in the queue
        // as our window shifts or grows in size
        if (left > deque[0]) {
            deque.shift();
        }

        // once the right pointer grows in size
        // this is tied to the window growing in size
        // once the window is of size k, then we should
        // always add to the result
        if (right + 1 >= k) {
            // since the idea is a montonic decreasing queue,
            // the first element in the queue will always hold
            // the maximum we want
            result.push(nums[deque[0]]);
            left = left + 1;
        }

        right = right + 1;
    }

    return result;
};