// 424. Longest Repeating Character Replacement

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.
 
// Constraints:

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const characterFrequencies = new Map();
    let left = 0;
    let result = 0;

    for (const right in s) {
        // set s[right] and increment its value in the map
        characterFrequencies.set(s[right], (characterFrequencies.get(s[right]) || 0) + 1);
        
        // right - left + 1 = window size
        // Math.max(...characterFrequencies.values()) = most frequent character in window
        // window size - most frequent character = # of characters that we change to
        // the most frequent character to make this a valid window
        // But k is the allowed number of characters that we can change
        // So if the amount of characters that we change is greater than k, then its an
        // invalid window. So we shrink our window until we have an amount of characters
        // changed that is <= k to make a valid window
        while ((right - left + 1) - Math.max(...characterFrequencies.values()) > k) {
            characterFrequencies.set(s[left], characterFrequencies.get(s[left]) - 1);
            left = left + 1;
        }

        result = Math.max(result, (right - left + 1));
    }

    return result;
};