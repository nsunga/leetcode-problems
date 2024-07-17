// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result = 0;
    let leftPointer = 0;
    let rightPointer = height.length - 1;

    while (leftPointer < rightPointer) {
        // whichever of the two bounds is higher,
        // the higher one effectively caps the height of the other one
        if (height[leftPointer] < height[rightPointer]) {
            const width = rightPointer - leftPointer;
            const area = height[leftPointer] * width;

            result = Math.max(result, area);
            leftPointer = leftPointer + 1;
        } else {
            const width = rightPointer - leftPointer;
            const area = height[rightPointer] * width;

            result = Math.max(result, area);
            rightPointer = rightPointer - 1;
        }
    }

    return result;
};