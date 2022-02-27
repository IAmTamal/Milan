import React, { useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DonateBanner from "../components/DonateBanner";
import HomeCardsContainer from "../components/HomeCardsContainer";
import EventsBanner from "../components/Events";
import LoginBanner from "../components/LoginBanner";

const AuthState = () => {
  const [login, setLogin] = useState(localStorage.getItem("token"));
  return login;
};
const Home = () => {
  return (
    <>
      <Navbar />
      {AuthState() ? <LoginBanner /> : <Banner />}
      <HomeCardsContainer />
      <DonateBanner />
      <EventsBanner />
      <Footer />
    </>
  );
};

export default Home;
