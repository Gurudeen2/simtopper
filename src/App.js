import "./App.css";
import Header from "./components/UI/Header/Header";
import Banner from "./components/UI/Pages/Banner";
import Home from "./components/UI/Pages/Home";
import Reason from "./components/UI/Pages/Reason";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Home />
      <Reason />
    </div>
  );
}

export default App;
