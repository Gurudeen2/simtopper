import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/HomePage/LandingPage";
import Footer from "./components/UI/Footer/Footer";
import Header from "./components/UI/Header/Header";

const Dashboard = React.lazy(() => import("./components/User/Admin/Dashboard"));
const Register = React.lazy(() => import("./components/User/Register"));
const Login = React.lazy(() => import("./components/User/Login"));

function App() {
  return (
    <div>
      <Header />
      {/* <LandingPage /> */}
      <Routes>
        <Route path="/" exact Component={Dashboard} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
