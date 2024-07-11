// 22. Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

// Constraints:

// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const stack = [];
    const result = [];
    const backtrack = function(openParentheses, closedParentheses) {
        if (openParentheses === n && closedParentheses === n) {
            result.push(stack.join(''));
            return;
        }

        if (openParentheses < n) {
            stack.push('(');
            backtrack(openParentheses + 1, closedParentheses);
            stack.pop();
        }

        if (closedParentheses < openParentheses) {
            stack.push(')');
            backtrack(openParentheses, closedParentheses + 1);
            stack.pop();
        }
    }

    backtrack(0, 0);
    
    return result;
};