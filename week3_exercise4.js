var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
  input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  var ttl = input[3];
  var pisah = ttl.split('/');
  var tanggal = pisah[0];
  var bulan = pisah[1];
  var tahun = pisah[2];

  switch(bulan) {
    case '01': {bulan = "januari"} break;
    case '02': {bulan = "februari"} break;
    case '03': {bulan = "maret"} break;
    case '04': {bulan = "april"} break;
    case '05': {bulan = "mei"} break;
    case '06': {bulan = "juni"} break;
    case '07': {bulan = "juli"} break;
    case '08': {bulan = "agustus"} break;
    case '09': {bulan = "september"} break;
    case '10': {bulan = "oktober"} break;
    case '11': {bulan = "november"} break;
    case '12': {bulan = "desember"} return bulan;
  }
  console.log(bulan);
  console.log(pisah.sort(function(a, b){return b-a}));
  console.log(pisah.join("-"));
  console.log(input[1].slice(0,14));
}

console.log(dataHandling2(input));