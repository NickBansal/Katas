function digital_root(n) {
  var num = n;
  while (num > 9) {
  	num = num.toString().split('').map(Number).reduce((x,i) => x+i)
  }
  return num
}
