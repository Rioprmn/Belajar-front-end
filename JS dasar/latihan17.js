//1.object literal
// let mahasiswa1 = {
//     name : 'Rio',
//     energy : 10,
//     makan : function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.name}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     name : 'edy',
//     energy : 15,
//     makan : function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.name}, selamat makan!`);
//     }
// }





//2.fuction declaration
// function mahasiswa (name, energy){
//     let mahasiswa = {};
//     mahasiswa.name = name;
//     mahasiswa.energy = energy;
//     mahasiswa.makan = function (porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.name}, selamat makan!`);
//     }
//     mahasiswa.main = function (jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.name}, selamat bermain!`);
//     }

//     return mahasiswa;
// }
// let rio= mahasiswa('Rio Permana', 10);
// let dody = mahasiswa('Dody', 15);




//3.constructor function
function Mahasiswa(name, energy){
    this.name = name;
    this.energy = energy;
    this.makan = function (porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.name}, selamat makan!`);
    }
    this.main = function (jam) {
        this.energy -= jam;
        console.log(`Halo ${this.name}, selamat bermain!`);
    }
}
let rio = new Mahasiswa('Rio Permana', 10);










//4.object.create()