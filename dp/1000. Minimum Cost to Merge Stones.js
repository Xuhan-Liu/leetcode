/**
 * @param {number[]} stones
 * @param {number} K
 * @return {number}
 */

const minCost = (s, k) => {
    let min = Number.MAX_VALUE
    let start = 0
    for (var i = 0; i <= s.length - k; i++) {
        let sum = 0
        for (var j = i; j < i + k; j++) {
            sum += s[j]
        }
        if (sum < min) {
            min = sum
            start = i
        }
    }
    return [min, start]
}


var mergeStones = function (stones, K) {
    if (stones.length === 1) return 0
    let result = 0
    while (true) {
        console.log("mergeStones -> stones", stones)
        if (stones.length < K) return -1
        const [sum, index] = minCost(stones, K)
        result += sum
        stones = [...stones.slice(0, index), sum, ...stones.slice(index + K)]
        if (stones.length === 1) return result
    }
};

