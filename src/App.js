import "./App.css";

import SideNav from "./components/SideNav";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <SideNav>
        <Home />{" "}
      </SideNav>
    </div>
  );
}

export default App;
