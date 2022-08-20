//// Dua jenis function
//// 1. Function Declaration
// function tampilPesan (nama) {
//     alert('Hello' + nama)
// }
// tampilPesan('dani')

//// 2. Function Expression
// let tampilPesan = function (nama) {
//     alert('Hello' + nama)
// }
// tampilPesan('Dani')

//// Arrow Function menyingkat kodingan menjadi seperti ini
// let tampilPesan = (nama) => {
//     alert('halo' + nama)
// }
// tampilPesan('Dani')

// const tampilNama = (nama) => { 
//     return `Halo, ${nama}`;
// }

//// Implisit return
// const tampilNama = (nama) => `Halo, ${nama}`;
// console.log(tampilNama('dani hidayat')); 

// const tampil = () => `Hello World`;
// console.log(tampil())



//// 
// let mahasiswa = ['Dani', 'Mita', 'Sukii'];

// let jumlahHuruf = mahasiswa.map(function (nama){
//     return nama.length;
// })

// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => {
//     return nama.length;
// })

// let jumlahHuruf = mahasiswa.map((nama) => nama.length)

// let jumlahHuruf = mahasiswa.map((nama) => ({
//     nama: nama, jmlHuruf: nama.length
// }));

// let jumlahHuruf = mahasiswa.map((nama) => ({
//     nama, jmlHuruf: nama.length
// }))

// console.log(jumlahHuruf);
// console.table(jumlahHuruf);



// ## KONSEP THIS PADA ARROW FUNCTION
// const Mahasiswa = function() {
//     this.nama = 'Dani Hidayat';
//     this.umur = 20;
//     this.sayHello = function() {
//         console.log(`Hello, nama saya ${this.nama}, dan saya berumur ${this.umur} tahun`)
//     }
// }

const Mahasiswa = () => {

}
 
const dani = new Mahasiswa();
