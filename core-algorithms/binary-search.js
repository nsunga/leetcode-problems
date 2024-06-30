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
        // or leftPointer + Math.floor((highPointer - leftPointer)/2) to avoid overflow
        const midpoint = Math.floor((rightPointer + leftPointer)/2);

        if (nums[midpoint] < target) {
            leftPointer = midpoint + 1;
        } else if (nums[midpoint] > target) {
            rightPointer = midpoint - 1;
        } else if (nums[midpoint] === target) {
            return midpoint;
        }
    }

    return -1;
};

var searchRecursively = function(nums, target) {
    const binarySearch = function(nums, target, leftPointer, rightPointer) {
        if (leftPointer > rightPointer) {
            return - 1;
        }

        const midpoint = Math.floor((leftPointer + rightPointer)/2);

        if (nums[midpoint] < target) {
            return binarySearch(nums, target, midpoint + 1, rightPointer);
        } else if (nums[midpoint] > target) {
            return binarySearch(nums, target, leftPointer, midpoint - 1);
        } else if (nums[midpoint] === target) {
            return midpoint;
        }
    }

    return binarySearch(nums, target, 0, nums.length - 1);
};
