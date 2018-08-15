function iqTest(numbers) {
	var newArr = numbers.split(' ').map(Number);
  	var odd = newArr.map(Number).filter(x => x%2 !== 0);
  	var even = newArr.map(Number).filter(x => x%2 === 0);
  	return (odd.length > 1) ? (newArr.indexOf(even[0]) + 1) : (newArr.indexOf(odd[0]) + 1)
}
console.log(iqTest("1 1 1 1 1 1 2"))

