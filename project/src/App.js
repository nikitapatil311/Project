import "./App.css";
import MyCard from "./components/card/Card";
import Gallery from "./components/gallery/gallery";

// Bootstrap configuration

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <div className="navbar text-bg-dark navbar-expand-sm">
        <div className="container">
          <a href="" className="navbar-brand text-light">
            React with bootstrap
          </a>
        </div>
      </div>
      <h2>Welcome to Reactjs</h2>
      <MyCard />
      <Gallery />
    </div>
  );
}

export default App;
