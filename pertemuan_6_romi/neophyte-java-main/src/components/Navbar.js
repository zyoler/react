import { useContext } from "react";
import { TemaContext } from "../App";
import Button from "./Button";

function Navbar() {
  const {tema, setTema} = useContext(TemaContext);

  return (
    <nav>
      <Button>Beranda</Button>
      <Button>Dokumentasi</Button>
      <Button
        onClick={() =>
          setTema(tema === "Terang" ? "Gelap" : "Terang")
        }
      >
        Ubah tema
      </Button>
    </nav>
  );
}

export default Navbar;
