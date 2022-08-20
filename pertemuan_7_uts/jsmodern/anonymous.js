// const welcome = function(anonymous) {
//     console.log("Selamat datang dani")
//     anonymous()
// }

// welcome(function(){
//     console.log("Login")
// })

const welcome = (anonymous) => {
    console.log("Selamat datang dani")
    anonymous()
}

welcome(()=>console.log("login"))