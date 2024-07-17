// 704. Binary Search

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;

    while (leftPointer <= rightPointer) {
        // (rp + lp)/2 - OG Midpoint formula
        // (rp + lp + lp - lp)/2
        // (2lp + rp - lp)/2
        // (2lp)/2 + (rp - lp)/2
        // lp + (rp - lp)/2 - this avoids overflow
        const midPointer = leftPointer + Math.floor((rightPointer - leftPointer)/2);

        if (nums[midPointer] < target) {
            leftPointer = midPointer + 1;
        } else if (nums[midPointer] > target) {
            rightPointer = midPointer - 1;
        } else {
            return midPointer;
        }
    }

    return -1;
};

var searchRecursively = function(nums, target) {
    const binarySearch = function(leftPointer, rightPointer) {
        if (leftPointer > rightPointer) {
            return -1;
        }

        const midPointer = leftPointer + Math.floor((rightPointer - leftPointer)/2);

        if (nums[midPointer] > target) {
            return binarySearch(leftPointer, midPointer - 1);
        } else if (nums[midPointer] < target) {
            return binarySearch(midPointer + 1, rightPointer);
        } else {
            return midPointer;
        }
    }

    return binarySearch(0, nums.length - 1);
};