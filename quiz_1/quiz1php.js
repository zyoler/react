const myName = ["Dani", "Hidayat", "Manchunian"]
const newName = myName.map(my=>my+"w");
console.log(newName);

let [namaDepan, namaTengah, namaBelakang] = newName;
console.log(namaDepan, namaTengah, namaBelakang);

let mahasiswa = {
    namaLengkap : namaDepan + " " + namaTengah + " " + namaBelakang,
    umur : 20
}

let {namaLengkap, umur} = mahasiswa;
console.log(namaLengkap, umur);

function cetak(cb){
    console.log(namaLengkap);
    cb();
}

cetak(function(){
    console.log(umur)
})