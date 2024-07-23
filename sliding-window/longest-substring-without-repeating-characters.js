// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const characterSet = new Set();
    let leftpointer = 0;
    let result = 0;

    for (const rightpointer in s) {
        while (characterSet.has(s[rightpointer])) {
            // keep removing characters from the substring until
            // we remove the occurrence of s[rightpointer] in the substring
            characterSet.delete(s[leftpointer]);
            leftpointer = leftpointer + 1;
        }

        characterSet.add(s[rightpointer]);
        // rightpointer - leftpointer + 1
        // Imagine a substring of length 2
        // Index 0 and 1 -> 1-0 = 1 but the length is 2
        // So add 1 - or just get the size of the set
        result = Math.max(result, rightpointer - leftpointer + 1);
    }

    return result;
};