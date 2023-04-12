import "./App.css";
import Header from "./components/UI/Header/Header";
import APIDocPage from "./components/UI/Pages/APIDocPage";
import Banner from "./components/UI/Pages/Banner";
import Home from "./components/UI/Pages/Home";
import PriceTag from "./components/UI/Pages/PriceTag";
import Reason from "./components/UI/Pages/Reason";
import UserCount from "./components/UI/Pages/UserCount";
import UserTestimonies from "./components/UI/Pages/UserTestimonies";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Home />
      <Reason />
      <UserCount />
      <PriceTag />
      <APIDocPage />
      <UserTestimonies />
    </div>
  );
}

export default App;
