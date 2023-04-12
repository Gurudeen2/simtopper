import "./App.css";
import Header from "./components/UI/Header/Header";
import APIDocPage from "./components/UI/Pages/APIDocPage";
import Banner from "./components/UI/Pages/Banner";
import Home from "./components/UI/Pages/Home";
import PriceTag from "./components/UI/Pages/PriceTag";
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
      <PriceTag />
      <APIDocPage/>
    </div>
  );
}

export default App;
