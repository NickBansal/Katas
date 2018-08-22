function converter (mpg) {
	var converted = 4.54609188 / 1.609344
	return Number((mpg/converted).toFixed(2))
}