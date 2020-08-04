// need to import the function to test
const sum = require('./sum')

// Below is what you would need to do in pure JS

// test('properly adds two numbers', () => {
//     if(sum(1, 2) === 3) {
//         // logic here
//     } else {
//         throw error
//     }
// })

test('properly adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
})