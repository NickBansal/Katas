function findEvenIndex(arr) {

	for (let i=0; i<arr.length-1; i++) {
		let left = arr.slice(0,i)
		let right = arr.slice(i+1,).reduce((a,b) => a+b)

		if (left.length === 0) {
			left = 0;
		} else {
			left = arr.slice(0,i).reduce((a,b) => a+b)
		}

		if (left === right) {
			return i;
		}
	}
	return -1
}


console.log(findEvenIndex([20,10,30,10,10,15,35]))

