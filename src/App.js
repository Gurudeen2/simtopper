import "./App.css";
import Header from "./components/UI/Header/Header";
import Banner from "./components/UI/Pages/Banner";
import Home from "./components/UI/Pages/Home";
import Reason from "./components/UI/Pages/Reason";
import UserCount from "./components/UI/Pages/UserCount";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Home />
      <Reason />
      <UserCount />
    </div>
  );
}

export default App;
