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