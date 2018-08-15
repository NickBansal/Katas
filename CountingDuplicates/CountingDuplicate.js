function duplicateCount(text){
	return text
	.toLowerCase()
	.split('')
	.sort()
	.filter((x, index, arr) => (arr.indexOf(x) !== index ))
	.filter((x, index, arr) => arr.indexOf(x) === index).length
}

console.log(duplicateCount('AbbA'))