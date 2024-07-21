// 33. Search in Rotated Sorted Array

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1

// Constraints:

// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftpointer = 0;
    let rightpointer = nums.length - 1;

    // get the index of the minimum value in nums
    // leftpointer and rightpointer will converge to the
    // same index that holds the minimum value
    while (leftpointer < rightpointer) {
        const minpointer = Math.floor((rightpointer + leftpointer)/2);

        if (nums[minpointer] > nums[rightpointer]) {
            leftpointer = minpointer + 1;
        } else {
            rightpointer = minpointer;
        }
    }

    const minpointer = leftpointer;

    if (minpointer === 0) {
        // this is normal binary search
        // the array must be already sorted
        leftpointer = 0;
        rightpointer = nums.length - 1;
    } else if (nums[0] <= target && nums[minpointer - 1] >= target) {
        // 0...minpointer - 1 is one ascending partition
        leftpointer = 0;
        rightpointer = minpointer - 1;
    } else {
        // minpointer...nums.length - 1 is the other ascending partition
        // REMEMBER, the minpointer is the value where the pivot happens
        leftpointer = minpointer;
        rightpointer = nums.length - 1;
    }

    while (leftpointer <= rightpointer) {
        const midpointer = Math.floor((rightpointer + leftpointer)/2);

        if (nums[midpointer] < target) {
            leftpointer = midpointer + 1;
        } else if (nums[midpointer] > target) {
            rightpointer = midpointer - 1;
        } else {
            return midpointer;
        }
    }

    return -1;
};