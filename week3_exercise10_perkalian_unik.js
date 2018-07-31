function perkalianUnik(arr){
  var hasil = []

  for(var i=0; i<arr.length; i++){
    var ar = 1
    for(var j=0; j<arr.length; j++){
      if(arr[i] !== arr[j]){
        ar *= arr[j]
      }
    }
    hasil.push(ar)
  }
  return hasil
  
}
console.log(perkalianUnik([2, 4, 6]));