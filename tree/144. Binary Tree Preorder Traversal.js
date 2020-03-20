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
// var preorderTraversal = function(root) {
//     if(!root) return []
//     return [root.val].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right))
// };


//* Method 2: Iterative
var preorderTraversal = function(root) {
    if(!root) return []
    const stack = [root]
    const result = []
    while(stack.length>0){
        const node = stack.pop()
        if(!node) continue
        result.push(node.val)
        stack.push(node.right)
        stack.push(node.left)
    }
    return result
};


//* Method 3: Tri-color marking
// var preorderTraversal = function(root) {
//     if(!root) return []
    
//     const white = 0
//     const grey = 1 
    
//     const stack = [[white,root]]
//     const result = []
    
//     while(stack.length>0){
//         const [color,node] = stack.pop()
//         if(!node) continue
//         if(color===white){
//             stack.push([white,node.right])
//             stack.push([white,node.left])
//             stack.push([grey,node])
//         }else{
//             result.push(node.val)
//         }
//     }
//     return result
// }