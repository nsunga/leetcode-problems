// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const charCountOfS = new Map();

    for (const char of s) {
        if (charCountOfS.has(char)) {
            charCountOfS.set(char, charCountOfS.get(char) + 1);
        } else {
            charCountOfS.set(char, 1);
        }
    }

    const charCountOfT = new Map();

    for (const char of t) {
        if (charCountOfT.has(char)) {
            charCountOfT.set(char, charCountOfT.get(char) + 1);
        } else {
            charCountOfT.set(char, 1);
        }
    }

    const keys = [...charCountOfS.keys()];

    for (let i = 0; i < keys.length; i += 1) {
        if (charCountOfT.get(keys[i]) !== charCountOfS.get(keys[i])) {
            return false;
        }
    }

    return true;
};
