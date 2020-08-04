const zipperUp = (alph, nums) => {
    let result = [];
    
    for(var i=0; i < nums.length; i++){
      result.push(nums[i]);
      result.push(alph[i % alph.length]);
    }
    return result;
  }

let alph = ['a','b','c','d'];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test('returns zippered array containing alternating letters and numbers, uses all numbers', () => {
    expect(zipperUp(alph, numbers)).toEqual([1,'a',2,'b',3,'c',4,'d',5,'a',6,'b',7,'c',8,'d',9,'a',10,'b'])
})