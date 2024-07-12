// 84. Largest Rectangle in Histogram

// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Example 1:

// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:

// Input: heights = [2,4]
// Output: 4
 
// Constraints:

// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = [];
    let maxRectangle = 0;

    // loop through each bar and calculate the areas
    // for the bars whose width is bounded by another bar
    // So, not bounded by the length of the histogram
    for (const [index, height] of heights.entries()) {
        let startingIndexOfCurrentBar = index;

        while (stack.length && stack[stack.length - 1].height > height) {
            // if the previous bar's height is greater than the current bar's height
            // then I know the width of the previous bar will be bounded by the
            // index of the current bar.
            //
            // So I can calculate the area that start's at the previous bar
            const previousBar = stack.pop();
            const widthOfBar = index - previousBar.index;
            const areaOfBar = previousBar.height * widthOfBar;

            maxRectangle = Math.max(maxRectangle, areaOfBar);

            // if the previous bar's height is greater than the current bar's height
            // then I know that the current bar's index can start at the previous
            // bar's index.
            startingIndexOfCurrentBar = previousBar.index;
        }

        stack.push({
            index: startingIndexOfCurrentBar,
            height,
        });
    }

    // the bounds of these bars start at their respective positions
    // and ends at the end of the histogram
    for (const bar of stack) {
        const widthOfBar = heights.length - bar.index;
        const areaOfBar = bar.height * widthOfBar;

        maxRectangle = Math.max(maxRectangle, areaOfBar);
    }

    return maxRectangle;
};