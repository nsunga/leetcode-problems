// 287. Find the Duplicate Number

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:

// Input: nums = [3,3,3,3,3]
// Output: 3

// Constraints:

// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.

// Follow up:

// How can we prove that at least one duplicate number must exist in nums?
// Can you solve the problem in linear runtime complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // Time: O(n) where n is the length of the array
    // Space: O(1)
    // NOTE: The optimized solution is hard and unintuitive if youve never seen this before
    // One intuitive way is that we can go with a set
    // Another is to sort and check the current value with its previous value
    let slow = nums[0];
    let fast = nums[0];
    
    // detect a cycle - specifically, the meeting point with slow-fast pointers
    // When slow and fast meet, this is not necessarily the duplicate
    // Remember, nums is an array, not a linked list.
    // But we apply the slow-fast rules to an array.
    // Slow is moving to one value per loop. Fast is moving two values per loop
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    
    let slow2 = nums[0];

    // Floyd's cycle detection algorithm
    // When one pointer is at the start of the list, and the other
    // is at the meetup point in the cycle,
    // if both pointers move at the same speed, they will
    // eventually meet at the starting point of the cycle.
    // This is the duplicate number
    while (slow !== slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }
    
    return slow;
};