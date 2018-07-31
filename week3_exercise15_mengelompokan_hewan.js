function groupAnimals(animals) {
  var sortAnimals = animals.sort()
  var resultAnimals = []
  var isiAnimals = []

  for(var i = 0; i < animals.length; i++){
    isiAnimals.push(animals[i])
    if(i < animals.length-1){
      if(animals[i][0] !== animals[i+1][0]){
        resultAnimals.push(isiAnimals)
        isiAnimals = []
      }
    } else {
      resultAnimals.push(isiAnimals)
      isiAnimals = []
    }
    
  }

  return resultAnimals

}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));