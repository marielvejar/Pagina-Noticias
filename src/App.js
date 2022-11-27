import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Header } from "./Components/Header.js";
import { Banner } from "./Components/Banner.js";
import {NewsSection} from "./Components/NewsSection.js";
import { Footer } from "./Components/Footer.js";

function App() {
  return (
    <div className="App">
      <Banner />
      <Header />
      <NewsSection />
      <Footer />
    </div>
  );
}

export default App;
