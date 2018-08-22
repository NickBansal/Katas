function initializeNames(name){
	var newName = name.split(' ')
	if (newName.length > 2) {
		var newNames = [newName[0]]
		for (let i=1; i<newName.length -1; i++) {
			newNames.push(`${newName[i][0]}.`)
		}
		newNames.push(newName[newName.length - 1])
		return newNames.join(' ');
	}
	return newName.join(' ');
}



console.log(initializeNames('Alice Betty Catherine Davis'))
