// 42. Trapping Rain Water

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let trappedWater = 0;

    if (!height.length) {
        return trappedWater;
    }

    let leftPointer = 0;
    let rightPointer = height.length - 1;
    let leftMax = height[leftPointer];
    let rightMax = height[rightPointer];

    while (leftPointer < rightPointer) {
        // The idea is that if the right side
        // has a bigger wall than the biggest
        // wall on the left side, then the current
        // space can potentially trap water equal
        // to the biggest wall on the left.
        //
        // This is because if the right wall is higher,
        // then water can never reach its height.
        // The water would overflow to the left.
        // Vice-versa for right. Immediately shift the
        // respective pointers since the ends cant contain
        // water. So essentially, calculate the water
        // inbetween the ends
        //
        // to calculate the actual trapped water
        // would be to take the smaller of the two bars
        // and subtract the current height that we are at
        if (leftMax < rightMax) {
            leftPointer = leftPointer + 1;
            leftMax = Math.max(leftMax, height[leftPointer]);
            trappedWater = trappedWater + leftMax - height[leftPointer];
        } else {
            rightPointer = rightPointer - 1;
            rightMax = Math.max(rightMax, height[rightPointer]);
            trappedWater = trappedWater + rightMax - height[rightPointer];
        }
    }

    return trappedWater;
};