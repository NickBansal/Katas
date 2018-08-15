function parityOutlier(arr) {
	var even = arr.filter(x => x%2 === 0);
	var odd = arr.filter(x => x%2 !== 0);
	return (even.length === 1) ? Number(even) : Number(odd);
}

