function angkaPalindrome(num){
  if (num >= 10){
    var x = (""+num).split("").reverse();
    var j = x.length -1;
    for (i = 0; x[j] !== num[i]; i++){
      for (i = 0; i <= j; j--){
          if (x[i] !== x[j]){
              return false;
          } else {
              j--;                                    
          }
      }
      return true;
    }
  }
  else if (num <= 9){

  }
  var digits = (""+num).split("").reverse();
}

console.log(angkaPalindrome(101));
