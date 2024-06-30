// 145. Binary Tree Postorder Traversal

// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
 
// Constraints:

// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Follow up: Recursive solution is trivial, could you do it iteratively?

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const stack = [root];
    const visited = [false];
    const result = [];

    while (stack.length) {
        const currentNode = stack.pop();
        const currentNodeIsVisited = visited.pop();

        if (currentNode) {
            if (currentNodeIsVisited) {
                result.push(currentNode.val);
            } else {
                stack.push(currentNode);
                visited.push(true);
                stack.push(currentNode.right);
                visited.push(false);
                stack.push(currentNode.left);
                visited.push(false);
            }
        }
    }

    return result;
};

var postorderTraversalRecursively = function(root) {
    const result = [];
    const postorder = function(node) {
        if (!node) {
            return;
        }

        postorder(node.left);
        postorder(node.right);
        result.push(node.val);
    }

    postorder(root);
    return result;
};