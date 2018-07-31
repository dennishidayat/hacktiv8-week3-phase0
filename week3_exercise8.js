function pasanganTerbesar(num) {
    return (""+num).split("").sort(function(a, b, c){
        return (a + b) - (b +c);
    });
}

console.log(pasanganTerbesar(641573));