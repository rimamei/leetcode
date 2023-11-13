/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let num = []

    for(let i=0; i < accounts.length; i++) {
        const sum = accounts[i].reduce((acc, curr) => {
            return acc + curr
        }, 0)

        num.push(sum)
    }

    return Math.max(...num)
};