// var angka = prompt('Masukan angka');

// if (angka % 2 == 0){
//     alert(angka + ' adalah angka Genap');
// }else if(angka % 2 == 1){
//     alert(angka + ' adalah angka Ganjil');
// }else{
//     alert('yang anda masukan bukan angka');
// }



var j = 10;
var Beroprasi = 6;

for(i = 1; i <= j; i++){
    if (i <= Beroprasi && i !== 5){
        console.log('Ojek NO.' +i + ' Beroprasi dengan baik.');
    }else if (i === 8 || i === 10 || i === 5){
        console.log('Ojek NO.' +i + ' Sedang lembur');
    }
    else{
        console.log('Ojek NO.' +i + ' Sedang Tidak Beroprasi.');
    }   
}