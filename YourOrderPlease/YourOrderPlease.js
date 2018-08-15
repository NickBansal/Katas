function order(words){
	var newArr = words.split(' ');
	var result = [];
	for (let j=0; j<=newArr.length; j++) {
		for (let i=0; i<newArr.length; i++) {
			if (newArr[i].indexOf(j) >= 0) {
				result.push(newArr[i])
			}
		}
	}	
	return result.join(' ');
}



	



















