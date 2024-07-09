// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for (const char of s) {
        if (
            char === '(' ||
            char === '{' ||
            char === '['
        ) {
            stack.push(char);
        } else {
            if (
                !stack.length ||
                (char === ')' && stack[stack.length - 1] !== '(') ||
                (char === '}' && stack[stack.length - 1] !== '{') ||
                (char === ']' && stack[stack.length - 1] !== '[')
            ) {
                return false;
            }

            stack.pop();
        }
    }

    if (stack.length) {
        return false;
    }

    return true;
};