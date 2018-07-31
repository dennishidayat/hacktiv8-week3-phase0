function hitungHuruf(kata) {
  var wordSplit = kata.split(" ")
  var finaResult = ''
  var target = 0
  
  
  for(var i = 0; i < wordSplit.length; i++){
    finaResult = wordSplit[i]
    var counter = 0
    console.log(finaResult)
    for(var j = 0; j < wordSplit[i].length; j++){
      var tampungKata = finaResult[j]
      for(var k = 0; k < wordSplit.length; k++){
        if(j !== k && (tampungKata === finaResult[k])){
          counter++
        }
      }
    }
    if(counter > target){
      target = counter
      wordSplit = finaResult
    }
  }
  if(target > 0){
    return wordSplit
  } else {
    return -1
  }
}

console.log(hitungHuruf('mengayuh perahu di danau')); 