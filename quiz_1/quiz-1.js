const myName = ["Dani", "Hidayat", "Manchunian"];

const newName = myName.map(my => my+"z");
console.log(newName);

let spread = [newName[0], newName[1], newName[2], 20];
console.log(spread)

let [namaDepan, namaTengah, namaBelakang, umur] = spread;
console.log(namaDepan, namaTengah,  namaBelakang, umur);

let mahasiswa = {
    namaLengkap : newName,
    umur : umur
}
console.log(mahasiswa)

let {namaLengkap} = mahasiswa;
console.log(namaLengkap)

function cetak(cb){
    console.log(namaLengkap);
    cb()
}

cetak(function(){
    console.log(umur)
})