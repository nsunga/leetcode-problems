// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 
// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const total = nums1.length + nums2.length;
    let smallArray = nums1;
    let bigArray = nums2;

    if (nums1.length > nums2.length) {
        smallArray = nums2;
        bigArray = nums1;
    }

    let left = 0;
    let right = smallArray.length - 1;

    // we are using binary search to find ourselves the left partition
    // had nums1 and nums2 been sorted - indirectly, we find the right partition by doing this
    // we do this on the smaller array of nums1 and nums2 since the
    // smaller array is faster to binary search through
    while (true) {
        const leftPartitionIndexForSmallArray = Math.floor((right + left)/2);
        const leftPartitionIndexForBigArray = Math.floor(total/2) - leftPartitionIndexForSmallArray - 2;

        let leftPartitionEndValueForSmallArray = smallArray[leftPartitionIndexForSmallArray];

        if (leftPartitionIndexForSmallArray < 0) {
            leftPartitionEndValueForSmallArray = Number.MIN_SAFE_INTEGER;
        }

        let leftPartitionEndValueForBigArray = bigArray[leftPartitionIndexForBigArray];

        if (leftPartitionIndexForBigArray < 0) {
            leftPartitionEndValueForBigArray = Number.MIN_SAFE_INTEGER;
        }

        let rightPartitionStartValueForSmallArray = smallArray[leftPartitionIndexForSmallArray + 1];

        if (leftPartitionIndexForSmallArray + 1 > smallArray.length - 1) {
            rightPartitionStartValueForSmallArray = Number.MAX_SAFE_INTEGER;
        }

        let rightPartitionStartValueForBigArray = bigArray[leftPartitionIndexForBigArray + 1];

        if (leftPartitionIndexForBigArray + 1 > bigArray.length - 1) {
            rightPartitionStartValueForBigArray = Number.MAX_SAFE_INTEGER;
        }

        if (leftPartitionEndValueForSmallArray <= rightPartitionStartValueForBigArray &&
            leftPartitionEndValueForBigArray <= rightPartitionStartValueForSmallArray
        ) {
            if (total % 2) {
                // odd number, take the min
                return Math.min(rightPartitionStartValueForSmallArray, rightPartitionStartValueForBigArray);
            } else {
                // even number, take the max
                const maxOfLeftPartitions = Math.max(leftPartitionEndValueForSmallArray, leftPartitionEndValueForBigArray);
                const minOfRightPartitions = Math.min(rightPartitionStartValueForSmallArray, rightPartitionStartValueForBigArray);
                return (maxOfLeftPartitions + minOfRightPartitions)/2;
            }
        } else if (leftPartitionEndValueForSmallArray > rightPartitionStartValueForBigArray) {
            right = leftPartitionIndexForSmallArray - 1;
        } else {
            left = leftPartitionIndexForSmallArray + 1;
        }
    }
};