import React, { Suspense, useContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthContext from "./components/store/authContext";
import LandingPage from "./components/HomePage/LandingPage";
import Footer from "./components/UI/Footer/Footer";
import Header from "./components/UI/Header/Header";

const Dashboard = React.lazy(() => import("./components/User/Admin/Dashboard"));
const Register = React.lazy(() => import("./components/User/Register"));
const Login = React.lazy(() => import("./components/User/Login"));

function App() {
  const authCtx = useContext(AuthContext)
  return (
    <Suspense fallback="Loading">
      <Header />
      {/* <LandingPage /> */}
      <Routes>
        <Route path="/" exact Component={Dashboard} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
