function validParentheses(parens) {
	return (
		parens.split('').filter(x => x === '(').length === 
		parens.split('').filter(x => x === ')').length) ? 
	true : false	
}



console.log(validParentheses("()()()()()()()()"))