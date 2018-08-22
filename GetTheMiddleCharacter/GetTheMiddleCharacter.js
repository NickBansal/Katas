function getMiddle(s) {
	var n = Math.floor(s.length / 2)
	if (s.length % 2 !== 0) {
    	return s[n];
  	} else {
    	return s[n-1]+s[n];
  	}
}