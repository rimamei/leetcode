const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

function romanToInt(s: string): number {
    const arr = s.split('').map(r => roman[r])

    // sum with condition for largest and smallest int
    const result = arr.reduce((acc, x, i) => x < arr[i + 1] ? acc - x : acc + x, 0)

    return result
};