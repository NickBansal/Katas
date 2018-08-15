function findOdd(A) {
	var results = [];
	A.sort((a,b) => a-b);
	for (let i=0; i<A.length; i++) {
		var filteredArray = A.filter(x => x === A[i])
		if (filteredArray.length % 2 !== 0) {
			return A[i];
		}
	}
}



console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))

