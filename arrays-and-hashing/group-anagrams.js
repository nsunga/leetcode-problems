// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const charFrequencyToStringsMap = new Map();

    for (const str of strs) {
        const charFrequencyArr = new Array(26).fill(0);

        for (const char of str) {
            const charToIndex = char.charCodeAt() - 'a'.charCodeAt();
            charFrequencyArr[charToIndex] = charFrequencyArr[charToIndex] + 1;
        }

        const key = charFrequencyArr.join(',');

        if (!charFrequencyToStringsMap.has(key)) {
            charFrequencyToStringsMap.set(key, []);
        }

        charFrequencyToStringsMap.get(key).push(str);
    }

    return [...charFrequencyToStringsMap.values()];
};