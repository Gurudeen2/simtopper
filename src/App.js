import "./App.css";
import LandingPage from "./components/HomePage/LandingPage";
import Footer from "./components/UI/Footer/Footer";
import Header from "./components/UI/Header/Header";
import Dashboard from "./components/User/Admin/Dashboard";
import Login from "./components/User/Login";
import Register from "./components/User/Register";

function App() {
  return (
    <div>
      <Header />
      {/* <LandingPage /> */}
      {/* <Login /> */}
      {/* <Dashboard /> */}
      <Register />
      <Footer />
    </div>
  );
}

export default App;
