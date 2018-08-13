var moveZeros = function (arr) {
 var result = [];
 for (let i=0; i<arr.length; i++) {
   if (arr[i] === 0) {
     result.push(arr[i]);
   }
 }
 return arr.filter(x => x !== 0).concat(result)
}
