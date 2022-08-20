import "./style.css";
import { useRef, useState } from "react";

function App() {
  const [gelap, setGelap] = useState(false);
  let jumlahRef = useRef(0);

  const styles = {
    background: gelap ? "black" : "white",
    width: "100vw",
    height: "100vh"
  };

  return (
    <div style={styles}>
      <button
        onClick={() => {
          setGelap(!gelap); 
          jumlahRef.current++;
          alert(`Anda mengubah sebanyak ${jumlahRef.current} kali`);
        }}
      >
        Klik me
      </button>
    </div>
  );
}

export default App;
