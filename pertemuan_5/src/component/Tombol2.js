import { useState } from "react";

function Tombol2() {
  const [teks, setTeks] = useState("Seli");
  const [warna, setWarna] = useState("#f00");

  function handleClick() {
    setTeks(() => "Nurul");
    setWarna(() => "#00f");
  }

  // const styles = {
  //     color: "white",
  //     backgroundColor: warna
  // }

  return (
    <button
      style={{
        color: "white",
        backgroundColor: warna,
        borderRadius: 32,
        padding: "8 16",
      }}
      onClick={handleClick}
    >
      {teks}
    </button>
  );
}

export default Tombol2;
