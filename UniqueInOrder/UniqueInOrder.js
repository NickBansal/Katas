function uniqueInOrder(iterable){
	if (typeof iterable === 'string') {
		var splitIterable = iterable.split('');
		var result = [splitIterable[0]]
		for (let i=1; i<splitIterable.length; i++) {
			if (splitIterable[i] !== splitIterable[i-1]) {
				result.push(splitIterable[i])
			} 
		}
		return result;
	} else if (typeof iterable[0] === 'number' || typeof iterable[0] === 'string') {
		var result = [iterable[0]]
		for (let i=1; i<iterable.length; i++) {
			if (iterable[i] !== iterable[i-1]) {
				result.push(iterable[i])
			} 
		}
		return result;
	} else {
		return [];
	}
}

console.log(uniqueInOrder([]))