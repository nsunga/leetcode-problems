// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 
// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const isCharAlphaNumeric = function(character) {
        const characterCode = character.charCodeAt();

        if ((characterCode >= 'a'.charCodeAt()) && (characterCode <= 'z'.charCodeAt())) {
            return true;
        }

        if ((characterCode >= 'A'.charCodeAt()) && (characterCode <= 'Z'.charCodeAt())) {
            return true;
        }

        if ((characterCode >= '0'.charCodeAt()) && (characterCode <= '9'.charCodeAt())) {
            return true;
        }

        return false;
    }

    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while (leftPointer < rightPointer) {
        while (leftPointer < rightPointer && !isCharAlphaNumeric(s[leftPointer])) {
            leftPointer = leftPointer + 1;
        }

        while (leftPointer < rightPointer && !isCharAlphaNumeric(s[rightPointer])) {
            rightPointer = rightPointer - 1;
        }

        if (s[leftPointer].toLowerCase() !== s[rightPointer].toLowerCase()) {
            return false;
        }

        leftPointer = leftPointer + 1;
        rightPointer = rightPointer - 1;
    }

    return true;
};