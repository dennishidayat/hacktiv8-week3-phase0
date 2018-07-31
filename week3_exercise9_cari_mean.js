function cariMean(arr){
  var hasilBagi = ''
  var hasil = 0
  var lenMean = arr.length
  for(var i=0; i<=lenMean-1; i++){
    hasil += arr[i]
    hasilBagi = Math.round(hasil / lenMean)
  }
  return hasilBagi
}
console.log(cariMean([1, 2, 3, 4, 5]))