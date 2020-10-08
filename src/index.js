module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let brackObj = Object.fromEntries(bracketsConfig);

    let tmp = str.split(``)
    for (let i in tmp) {
        if (stack[0] === tmp[i]) {
            stack.shift();
        } else if (brackObj[tmp[i]]) {
            stack.unshift(brackObj[tmp[i]]);
        } else {
            return false;
        }
    }

    return stack.length === 0;
}
