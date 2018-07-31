function tentukanDeretAritmatika(arr) {
  var arr2 = arr[1] - arr[0]
  for(var i = 1; i < arr.length; i++){
    if(arr[i] !== arr[i-1]+arr2){
      return false
    }
  }
  return true
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); 