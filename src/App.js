import React from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Gallery />
      <AboutUs />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
