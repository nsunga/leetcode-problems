// 74. Search a 2D Matrix

// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
 
// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const mRows = matrix.length;
    const nColumns = matrix[0].length;
    const numberOfCells = mRows * nColumns;
    let leftPointer = 0;
    let rightPointer = numberOfCells - 1;

    while (leftPointer <= rightPointer) {
        const midPointer = leftPointer + Math.floor((rightPointer - leftPointer)/2);
        const row = Math.floor(midPointer/nColumns); // midpointer / numberOfColumns = row representation
        const col = midPointer % nColumns; // midpointer % numberOfColumns = col representation
        const valueAtMidPointer = matrix[row][col];
        
        if (valueAtMidPointer > target) {
            rightPointer = rightPointer - 1;
        } else if (valueAtMidPointer < target) {
            leftPointer = leftPointer + 1;
        } else {
            return true;
        }
    }

    return false;
};