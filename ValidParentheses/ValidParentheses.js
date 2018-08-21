function validParentheses(parens) {
	var split = parens.split('')
	if (split[0] === '(' && split[split.length - 1] === ')' && split.length > 1) {
		return (
			parens.split('').filter(x => x === '(').length === 
			parens.split('').filter(x => x === ')').length) ? 
		true : false
	} else {
		return false;
	}
}



console.log(validParentheses(")(()"))
