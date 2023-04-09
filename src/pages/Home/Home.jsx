import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';

const Home = () => {
  return (
    <div style={{height: "100vh" , position: 'relative'}}>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
