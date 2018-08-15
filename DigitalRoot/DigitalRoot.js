function digital_root(num) {
  while (num > 9) {
  	num = num.toString().split('').map(Number).reduce((x,i) => x+i)
  }
  return num
}

console.log(digital_root(16))