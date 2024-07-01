// 347. Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const result = [];
    const countToNumbersBucket = [];
    const numsToCountMap = new Map();

    for (let i = 0; i < nums.length + 1; i += 1) {
        countToNumbersBucket[i] = [];
    }

    for (const num of nums) {
        if (!numsToCountMap.has(num)) {
            numsToCountMap.set(num, 1);
        } else {
            numsToCountMap.set(num, numsToCountMap.get(num) + 1);
        }
    }

    numsToCountMap.forEach((count, num) => {
        countToNumbersBucket[count].push(num);
    });

    for (let i = countToNumbersBucket.length - 1; i > 0; i -= 1) {
        const list = countToNumbersBucket[i];

        if (list.length) {
            for (let j = 0; j < list.length; j += 1) {
                result.push(list[j]);

                if (result.length === k) {
                    return result;
                }
            }
        }
    }
};