function tentukanDeretGeometri(arr) {
  var arr2 = arr[1] / arr[0]
  for(var a=1; a<arr.length; a++){
    if(arr[a] !== arr[a-1]*arr2){
      return false
    }
  }
  return true
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); 