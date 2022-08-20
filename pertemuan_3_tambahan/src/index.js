import ReactDOM from "react-dom/client";

function Welcome(props){
    return <h3>Selamat datang {props.name}</h3>
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <>
        <Welcome name="dani"/>
        <Welcome name="dani"/>
        <Welcome name="dani"/>
    </>
);

