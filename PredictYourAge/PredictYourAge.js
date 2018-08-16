function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
	return Math.floor(Math.pow(
		[age1,age2,age3,age4,age5,age6,age7,age8]
		.map(x => x*x)
		.reduce((x,index) => x+index), 0.5)/2)
}



