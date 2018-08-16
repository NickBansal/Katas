function GetSum( a,b ) {
    var count = 0;
    if (a === b) {
      return a;
    } else if (a>b) {
      for (var i=a; i>=b; i--){
        count += i;
      }
    } else if (a<b) {
      for (var i=b; i>=a; i--){
        count += i;
      }
    }
    return count;
}



