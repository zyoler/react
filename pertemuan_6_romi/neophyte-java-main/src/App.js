import Header from "./components/Header";
import "./style.css";
import {useState, createContext} from "react"

export const products = [
  {
    id: 1,
    name: "Jaket Kulit H&M",
    price: 700000,
    photo: "/img/jaket.jpg",
  },
  {
    id: 2,
    name: "MacBook Pro 2023",
    price: 30000000,
    photo: "/img/macbook.jpg",
  },
  {
    id: 3,
    name: "Kipas Angin",
    price: 200000,
    photo: "/img/kipas.jpg",
  },
];

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

export const TemaContext = createContext();

function App() {
  const [tema, setTema] = useState("Terang");

  return (
    <TemaContext.Provider value={{tema ,setTema}}>
      <div
        style={{
          display: "flex",
          gap: 16,
          background: tema==="Terang"? "#fff" : "#000",
        }}
      >
        <Header />
        <div>
          {products.map(function (p) {
            return (
              <div
                key={p.id}
                style={{
                  background: "#ddd",
                  padding: 16,
                  borderRadius: 16,
                }}
              >
                <img src={p.photo} />
                <h5>{p.name}</h5>
                <h6>{formatter.format(p.price)}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </TemaContext.Provider>
  );
}

export default App;
