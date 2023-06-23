import React, { Suspense, useContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthContext from "./components/store/authContext";
import LandingPage from "./components/HomePage/LandingPage";
import Footer from "./components/UI/Footer/Footer";
import Header from "./components/UI/Header/Header";
import DemoReg from "./components/Demo/Account/Registration/Register";
import DemoLogin from "./components/Demo/Account/Login/Login";

const Dashboard = React.lazy(() => import("./components/User/Admin/Dashboard"));
const Register = React.lazy(() => import("./components/User/Register"));
const Login = React.lazy(() => import("./components/User/Login"));
const ChangePassword = React.lazy(() =>
  import("./components/User/ChangePassword/ChangePassword")
);

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Suspense fallback="Loading">
      <Header />
      {/* <LandingPage /> */}
      <Routes>
        {/* {authCtx.isLoggedIn ? */}
        <Route path="/*" exact Component={Dashboard} />
        {/* : } */}

        <Route path="/demoreg" Component={DemoReg} />
        <Route path="/demologin" Component={DemoLogin} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/changepassword" Component={ChangePassword} />
      </Routes>
      {/* <Footer /> */}
    </Suspense>
  );
}

export default App;
