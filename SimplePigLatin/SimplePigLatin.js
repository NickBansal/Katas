function pigIt(str){
	var result = []
    str.split(' ').forEach((e) => {
    	(e.match(/\W/g)) ? result.push(e) : result.push((`${e}${e[0]}ay`).substr(1))
    })
    return result.join(' ');
}

console.log(pigIt('Pig latin is cool !'))

