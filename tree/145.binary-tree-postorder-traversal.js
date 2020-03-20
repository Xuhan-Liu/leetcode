/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//* Method 1: Recursive
// var postorderTraversal = function(root) {
//     if(!root) return []
//     return postorderTraversal(root.left).concat(postorderTraversal(root.right)).concat([root.val])
// };

//* Method 2: Iterative
var postorderTraversal = function (root) {
    if (!root) return []
    const stack = [root]
    const result = []
    let p = root
    while (stack.length > 0) {
        const top = stack[stack.length - 1]
        if (top.left === p || top.right === p || (!top.left && !top.right)) {
            const node = stack.pop()
            p = node
            result.push(node.val)
        } else {
            if (top.right) stack.push(top.right)
            if (top.left) stack.push(top.left)
        }
    }
    return result
}

//* Method 3: Tri-color marking
// var postorderTraversal = function (root) {
//     if (!root) return []

//     const white = 0
//     const grey = 1

//     const stack = [[0, root]]
//     const result = []

//     while (stack.length > 0) {
//         const [color, node] = stack.pop()
//         if (!node) continue
//         if (color === white) {
//             stack.push([grey, node])
//             stack.push([white, node.right])
//             stack.push([white, node.left])
//         } else {
//             result.push(node.val)
//         }
//     }
//     return result
// }