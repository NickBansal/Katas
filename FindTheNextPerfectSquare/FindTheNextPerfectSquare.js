function findNextSquare(sq) {
	var nextSquare = Math.sqrt(sq) + 1
	return (Math.sqrt(sq) % 1 === 0) ? Math.pow(nextSquare, 2) : -1
}


console.log(findNextSquare(120))