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
// var inorderTraversal = function (root) {
//     if (!root) return []
//     return inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right))
// };

//* Method 2: Iterative
// var inorderTraversal = function (root) {
//     if (!root) return []
//     const stack = [root]
//     const result = []
//     let left = root.left
//     while (left) {
//         stack.push(left)
//         left = left.left
//     }
//     let item = stack.pop()
//     while (item) {
//         result.push(item.val)
//         let right = item.right
//         while (right) {
//             stack.push(right)
//             right = right.left
//         }
//         item = stack.pop()
//     }
//     return result
// }

//* Method 3: Tri-color marking
var inorderTraversal = function (root) {
    if (!root) return []

    const white = 0
    const grey = 1

    const stack = [[0, root]]
    const result = []

    while (stack.length > 0) {
        const [color, node] = stack.pop()
        if (!node) continue
        if (color === white) {
            stack.push([white, node.right])
            stack.push([grey, node])
            stack.push([white, node.left])
        } else {
            result.push(node.val)
        }
    }
    return result
}