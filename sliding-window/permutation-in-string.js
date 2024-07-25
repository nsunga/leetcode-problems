// 567. Permutation in String

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
 
// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // Time: O(26n) => O(n)
    // Space: O(1)
    if (s1.length > s2.length) {
        return false;
    }

    const characterCountOfS1 = new Array(26).fill(0);
    const characterCountOfWindow = new Array(26).fill(0);

    const bothArraysEqual = (arr1, arr2) => {
        return arr1.every((characterFrequency, index) => {
            return characterFrequency === arr2[index];
        });
    };

    for (const index in s1) {
        let characterToIndex = s1[index].charCodeAt() - 'a'.charCodeAt();
        characterCountOfS1[characterToIndex] = characterCountOfS1[characterToIndex] + 1;

        characterToIndex = s2[index].charCodeAt() - 'a'.charCodeAt();
        characterCountOfWindow[characterToIndex] = characterCountOfWindow[characterToIndex] + 1;
    }

    if (bothArraysEqual(characterCountOfS1, characterCountOfWindow)) {
        return true;
    }

    for (let index = s1.length; index < s2.length; index = index + 1) {
        let characterToIndex = s2[index].charCodeAt() - 'a'.charCodeAt();
        characterCountOfWindow[characterToIndex] = characterCountOfWindow[characterToIndex] + 1;

        const indexOfRemovedWindowCharacter = index - s1.length;
        characterToIndex = s2[indexOfRemovedWindowCharacter].charCodeAt() - 'a'.charCodeAt();
        characterCountOfWindow[characterToIndex] = characterCountOfWindow[characterToIndex] - 1;

        if (bothArraysEqual(characterCountOfS1, characterCountOfWindow)) {
            return true;
        }
    }

    return false;
};