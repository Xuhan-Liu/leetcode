/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function (sticks) {
    if (sticks.length <= 1) return 0
    sticks.sort((a, b) => a - b)
    let sum = 0
    while (sticks.length > 0) {
        const _sum = sticks.shift() + sticks.shift()
        sum += _sum
        if (sticks.length === 0) return sum
        for (var i = 0; i < sticks.length; i++) {
            if (_sum <= sticks[i]) {
                sticks = [...sticks.slice(0, i), _sum, ...sticks.slice(i)]
                break
            }
        }
        if (_sum > sticks[sticks.length - 1]) sticks = [...sticks, _sum]
    }
};