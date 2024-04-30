import "./App.css";
import MyCard from "./components/card/Card";
import Gallery from "./components/gallery/Gallery";
import Navbar from "./components/layout/navbar/Navbar";
import Student from "./components/student/Student";

// Bootstrap configuration

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Counter from "./components/counter/Counter";
import Brand from "./components/counter/Brand";

function App() {
  return (
    <div className="App">
      <Navbar header="Counter Card" color="bg-warning" expand="sm" />
      <Student />
      <Counter />
      <Brand />
      <h2>Welcome to Reactjs</h2>
      <MyCard />
      <Gallery />
    </div>
  );
}

export default App;
