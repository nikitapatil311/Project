import "./App.css";
import MyCard from "../src/components/Card";

// Bootstrap configuration

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <h2>Welcome to Reactjs</h2>
      <MyCard />
    </div>
  );
}

export default App;
