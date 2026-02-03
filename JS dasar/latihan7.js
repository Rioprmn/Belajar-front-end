// var i = prompt('Masukan angka :');

// switch(i){
//     case '1':
//         alert(' adalah angka 1');
//         break;
//     case '2':
//         alert(' adalah angka 2');
//         break;
//     case '3':
//         alert(' adalah angka 3');
//         break;
//     default:
//         alert('yang anda masukan bukan angka 1, 2, atau 3');
//         break;

// }


var item = prompt('Masukan nama makan atau makanan  : \n (contoh : nasi goreng, sate, bakso, mie ayam, gudeg)');

switch(item){
    case 'nasi goreng':
        alert(' adalah makanan kesukakan saya');
        break;
    case 'sate':
        alert(' adalah makanan kesukaan saya');
        break;
    case 'bakso':
        alert(' adalah makanan  kurang suka');
        break;
    case 'mie ayam':
        alert(' adalah makanan kesukaan saya');
        break;
    case 'gudeg':
        alert(' adalah makanan kurang suka');
        break;
    default:
        alert('makanan yang anda masukan tidak ada dalam daftar');
        break;

}