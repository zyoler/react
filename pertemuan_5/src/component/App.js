import Tombol from "./Tombol";
import Tombol2 from "./Tombol2";

function App() {
  function handleClickHome() {
    alert("Hai");
  }

  function handleClickLogin() {
    console.log("test");
  }

  return (
    <>
      <Tombol onKlik={handleClickHome}>Home</Tombol>
      <Tombol onKlik={handleClickLogin}>Login</Tombol>
      <Tombol>Buat akun</Tombol>
      <Tombol2 />
    </>
  );
}

export default App;
