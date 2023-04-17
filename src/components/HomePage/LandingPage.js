import React from "react";
import Banner from "../UI/Pages/Banner";
import Home from "../UI/Pages/Home";
import Reason from "../UI/Pages/Reason";
import UserCount from "../UI/Pages/UserCount";
import PriceTag from "../UI/Pages/PriceTag";
import APIDocPage from "../UI/Pages/APIDocPage";
import UserTestimonies from "../UI/Pages/UserTestimonies";
import Partner from "../UI/Pages/Partner";

function LandingPage() {
  return (
    <div>
      <Banner />
      <Home />
      <Reason />
      <UserCount />
      <PriceTag />
      <APIDocPage />
      <UserTestimonies />
      <Partner />
    </div>
  );
}

export default LandingPage;
