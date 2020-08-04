const paddedNum = textArray => {
	let result = [];
  for(var i=0; i < textArray.length; i++){
    if(textArray[i].length === 1){
      result.push('0' + textArray[i]);
    }
    else{
      result.push(textArray[i]);
    }
  }
  return result;
}

let nums = ['2', '4', '25', '10', '3']

test('pad all single digits into double digits with a preceding 0', () => {
    expect(paddedNum(nums)).toEqual(['02', '04', '25', '10', '03'])
})