const cloneArray = require('./cloneArray')

// this code below will fail because though the value of the array are the same, 
// they are stored in different places

// test('properly clones array', () => {
//     const array = [1, 2, 3]
//     expect(cloneArray(array)).toBe(array)
// })

// instead use "toEqual"

test('properly clones array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
    
    // checks that the arrays are in fact separate (one is a copy)
    expect(cloneArray(array)).not.toBe(array) 
})