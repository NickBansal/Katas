function scramble(str1, str2) {
	str1 = str1.split('').sort()
	str2 = str2.split('').sort()
	var result = []
	for (let i=0; i<str2.length; i++) {
		for (let j=0; j<str1.length; j++) {
			if (str1[i] === str2[i]) {
				str2.splice([i],1)
			} else {
				return false;
			}
		}
	return true
	}
	
}

console.log(scramble('rkqodlw','world')); //true
// console.log(scramble('cedewaraaossoqqyt','codewars')); //true
// console.log(scramble('katas','steak')); //false
// console.log(scramble('scriptjva','javascript')); //true
// console.log(scramble('scriptingjava','javascript')); //true
// console.log(scramble('scriptsjava','javascripts')); //true
// console.log(scramble('jscripts','javascript')); //false
// console.log(scramble('aabbcamaomsccdd','commas')); //true



/* 
var result = [];
	for (let i=0; i<str2.length; i++) {
		(str1.match(str2[i])) ? 
		console.log(str1.index) 
		: result.push(false)
	}
*/