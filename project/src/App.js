import "./App.css";
import MyCard from "./components/card/Card";
import Gallery from "./components/gallery/Gallery";
import Navbar from "./components/layout/navbar/Navbar";

// Bootstrap configuration

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <Navbar header="Vacation Time" color="bg-warning" expand="sm" />
      <h2>Welcome to Reactjs</h2>
      <MyCard />
      <Gallery />
    </div>
  );
}

export default App;
