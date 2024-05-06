import React from "react";
import './App.css';
import { CTA, Navbar, Brand } from "./components";

import {
  Footer,
  WhatGPT3,
  Blog,
  Header,
  Features,
  Possibility,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer/>
    </div>
  );
}

export default App;
