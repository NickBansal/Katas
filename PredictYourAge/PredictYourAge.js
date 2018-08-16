function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
	var result = ((age1 * age1)+(age2 * age2)+(age3 * age3)+(age4 * age4)+
	(age5 * age5)+(age6 * age6)+(age7 * age7)+(age8 * age8))
	var squareRoot = Math.pow(result, 0.5);
	return Math.floor(squareRoot/2);
}


