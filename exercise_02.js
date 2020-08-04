const zipperUp = (alph, nums) => {
  let result = [];
  
  for(var i=0; i < nums.length; i++){
    result.push(nums[i]);
    result.push(alph[i % alph.length]);
  }
  return result;
}