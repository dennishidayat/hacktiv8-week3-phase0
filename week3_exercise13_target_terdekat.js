function targetTerdekat(arr) {
  var iO = arr.indexOf('o')
  var iX = arr.indexOf('x')
  var jarakTerdekat = arr.length
  var hasil = 0

  if(iX === -1){
    return 0
  }

  for(var i=0; i<arr.length; i++){
    if(arr[i] === 'x'){
      hasil = Math.abs(i - iO)
      if(hasil < jarakTerdekat){
        jarakTerdekat = hasil
      }
    }
  }
  return jarakTerdekat
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']));