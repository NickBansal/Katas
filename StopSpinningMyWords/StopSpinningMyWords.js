function spinWords(str){
  var result = [];
  var x = str.split(' ');
  for (let i=0; i<x.length; i++){
    if (x[i].length > 4) {
      var p = x[i].split('').reverse().join('')
      result[i] = p
    } else {
      result.push(x[i])
    }
  } 
  return result.join(' ')
}