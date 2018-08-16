function duplicateCount(text){
	return text
	.split('')
	.filter((x, index, arr) => arr.indexOf(x) !== index)
	.filter((x, index, arr) => arr.indexOf(x) === index).length
}

console.log(duplicateCount('indivXMXisibilitysLLssstttt'))

