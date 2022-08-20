import ReactDom from "react-dom/client";
import App from "./component/App";

const root = ReactDom.createRoot(document.querySelector("#root"));

const user = "Mita";

root.render(
  <>
    <App user={user} />
  </>
);
