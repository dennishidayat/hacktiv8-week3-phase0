function balikString(nama){
  var print = "";
  for (var i = nama.length -1; i > -1; i--){
    print = print + nama[i];
   }
  return print
}

console.log(balikString("hello world!"))
