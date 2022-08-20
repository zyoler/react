import ReactDOM from "react-dom/client";
import Counter from "./component/Counter";
import Hello from "./component/Hello";
import Message from "./component/Message";
import Welcome from "./component/Welcome";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <div>
      <Hello />
      <Welcome name="Dani" age="21">
        <p>Ini anak dani</p>
      </Welcome>
      <Welcome name="Mita" age="20"/>
      <Welcome name="Toro" age="7"/>
      <Message />
      <Counter />
    </div>
  </>
);
