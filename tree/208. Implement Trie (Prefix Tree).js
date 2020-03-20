/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.children = []
    this.isWord = false
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this
    for (var i = 0; i < word.length; i++) {
        const charCode = word[i].charCodeAt(0) - 'a'.charCodeAt(0)
        if (!node.children[charCode]) {
            node.children[charCode] = new Trie()
        }
        node = node.children[charCode]
    }
    node.isWord = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this
    for (var i = 0; i < word.length; i++) {
        const charCode = word[i].charCodeAt(0) - 'a'.charCodeAt(0)
        if (!node.children[charCode]) return false
        node = node.children[charCode]
    }
    return node.isWord
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this
    for (var i = 0; i < prefix.length; i++) {
        const charCode = prefix[i].charCodeAt(0) - 'a'.charCodeAt(0)
        if (!node.children[charCode]) return false
        node = node.children[charCode]
    }
    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */