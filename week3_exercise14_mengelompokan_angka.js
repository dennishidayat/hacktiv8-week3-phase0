function mengelompokkanAngka(arr) {
  var hasil = []
  
  for(var i=0; i<3; i++){
    hasil.push([])
  }
  
  for(var j=0; j<arr.length; j++){
    if(arr[j] % 3 === 0){
      hasil[2].push(arr[j])
    } else if(arr[j] % 2 !== 0){
      hasil[1].push(arr[j])
    } else if(arr[j] % 2 === 0){
      hasil[0].push(arr[j])
    }
  }
  
  return hasil
}

console.log(mengelompokkanAngka([2, 4, 6]));