function persistence(num) {
	var count = 0
	while (num > 9) {
		var numStr = num.toString().split('').reduce((x,i) => x*i);
		num = Number(numStr);
		count++;
	}
 	return count
}

console.log(persistence(4));
