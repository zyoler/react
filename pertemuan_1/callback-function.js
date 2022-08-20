// callback function
// fungsi yang dijadikan argumen fungsi lain
// kemudian dipanggil, dari dalam fungsi

function tampilNama(nama1) {
  console.log("Hai");
  nama1();
}

tampilNama(function () {
  console.log("Wow");
});

