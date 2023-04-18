import "./App.css";
// import LandingPage from "./components/HomePage/LandingPage";
import Footer from "./components/UI/Footer/Footer";
import Header from "./components/UI/Header/Header";
import Register from "./components/User/Register";

function App() {
  return (
    <div>
      <Header />
      {/* <LandingPage /> */}

      <Register />
      <Footer />
    </div>
  );
}

export default App;
