function pigIt(str){
	return str.split(' ').map(x => (x.match(/\W/g)) ? x : (`${x}${x[0]}ay`).substr(1)).join(' ')
}

console.log(pigIt('Hello World !'))

