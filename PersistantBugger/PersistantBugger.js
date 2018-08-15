function persistence(num) {
	var count = 0
	while (num > 9) {
		var numStr = num.toString().split('');
		var newStr = numStr.reduce((x,i) => x*i);
		num = Number(newStr);
		count++;
	}
 	return count
}

console.log(persistence(4));
