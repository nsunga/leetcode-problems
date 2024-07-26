// 76. Minimum Window Substring

// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 
// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.
 
// Follow up: Could you find an algorithm that runs in O(m + n) time?

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t === '') {
        return '';
    }

    // Characters mapped to its occurrences for a given string
    const charMapOfT = {};
    const charMapOfWindow = {};

    // O(t)
    for (const char of t) {
        charMapOfT[char] = (charMapOfT[char] || 0) + 1;
    }

    const numberOfKeysOfT = Object.keys(charMapOfT).length;
    let satisfiedNumberOfKeysOfT = 0;
    let result = [-1, -1];
    let resultLength = Infinity;
    let left = 0;

    // O(s)
    for (let right = 0; right < s.length; right = right + 1) {
        const rightChar = s[right];
        charMapOfWindow[rightChar] = (charMapOfWindow[rightChar] || 0) + 1;

        // check if the rightChar is a key in charMapOfT
        // if the number of occurrences of rightChar in charMapOfWindow is equal to
        // the number of occurrences of rightChar in charMapOfT
        // then our window substring has the same number of rightChar as does string t
        if (charMapOfT[rightChar] && charMapOfWindow[rightChar] === charMapOfT[rightChar]) {
            satisfiedNumberOfKeysOfT = satisfiedNumberOfKeysOfT + 1;
        }

        // We have a valid window substring that is a permutation of string t
        while (satisfiedNumberOfKeysOfT === numberOfKeysOfT) {
            const windowLength = right - left + 1;

            if (windowLength < resultLength) {
                resultLength = windowLength;
                result = [left, right];
            }

            // lets take this valid window substring and shrink it to see if we can
            // POTENTIALLY get a smaller valid window
            // we know we got a valid substring from incrementing the right pointer
            // if we decrement the right pointer, then we know its an invalid substring
            // so we decrement the left pointer
            const leftChar = s[left];
            charMapOfWindow[leftChar] = charMapOfWindow[leftChar] - 1;

            // our window substring is now invalid since
            // we have a smaller amount of character 'leftChar' in our window compared
            // to the amount in string t
            if (charMapOfT[leftChar] && charMapOfWindow[leftChar] < charMapOfT[leftChar]) {
                satisfiedNumberOfKeysOfT = satisfiedNumberOfKeysOfT - 1;
            }

            left = left + 1;
        }
    }

    // Time complexity: O(t) + O(s) = O(t+s)
    // Space complexity: O(t) + O(s) = O(t+s)
    if (resultLength !== Infinity) {
        const [left, right] = result;
        return s.substring(left, right + 1);
    } else {
        return '';
    }
};