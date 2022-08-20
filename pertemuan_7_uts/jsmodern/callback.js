function test(nama){
    console.log("Hallo", nama)
}

function test2(){
    console.log("Hai")
}

function test3(callback1, callback2, nama){
    callback2()
    console.log("Woi")
    callback1(nama)
}

test3(test, test2, "dani")