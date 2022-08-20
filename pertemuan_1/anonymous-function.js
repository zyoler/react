let tampilPesan = function (nama) {
  alert("Hello" + nama);
};
tampilPesan("Dani");

let tampilPesan2 = (nama) => {
  alert("halo" + nama);
};

tampilPesan("Dani");

const tampilNama2 = (nama) => {
  return `Halo, ${nama}`;
};

const tampilNama = (nama) => `Halo, ${nama}`;
console.log(tampilNama("dani hidayat"));

const tampil = () => `Hello World`;
console.log(tampil());
