const myName = ["Dani","Hidayat","Zyoler"];
const newName = myName.map(my=>"1"+my);;
console.log(newName);

const filterName = newName.filter(my=>my.includes("o"));
console.log(filterName);

const myNickName =  newName.find(my=> my.includes("d"));
console.log(myNickName);

function welcome(callback){
    console.log("Selamat Datang"); 
    callback();
}
welcome(function(){
    console.log(myNickName);
});