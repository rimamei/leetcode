function isValid(s: string): boolean {
    let stack: string[] = []
    const pair = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        // check open bracket
        if (char in pair) {
            stack.push(char)
        } else {
            // check closing bracket by removing last index stack
            const getStackLastIndex = stack.pop()

            // Comparing value with char 
            // e.g: char = ')', getStackLastIndex = '(' => pair['('] === char
            // if no stack index detected will be returned false
            if (!getStackLastIndex || pair[getStackLastIndex] !== char) {
                return false
            }
        }
    }

    return stack.length === 0
};