import ReactDOM from "react-dom/client";
import "./style.css";

// const nama = "Dani Hidayat";
// let sudahLogin = false;
// const urlLogin = "https://www.facebook.com/login";

// function checkLogin(){
//   if (sudahLogin){
//     return <h1>{nama}</h1>
//   }else{
//     return <a href={urlLogin} className="tombol-login">Login</a>
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(checkLogin());

const root = ReactDOM.createRoot(document.getElementById("root"));
function tambahDetik() {
  const element = (
    <div>
      <h1>Halo!</h1>
      <h2>Sekarang pukul {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}
setInterval(tambahDetik, 1000);