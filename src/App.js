import { BrowserRouter } from "react-router-dom";
import "./App.css";
import CustomRouter from "./router/CustomRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
