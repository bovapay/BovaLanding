import React from "react";

import Header from "./components/Header/Header";
import AppContainer from "./components/AppContainer/AppContainer";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Clients from "./components/Clients/Clients";
import Order from "./components/Order/Order";
import Advantages from "./components/Advantages/Advantages";
import Payments from "./components/Payments/Payments";
import ConnectUs from "./components/ConnectUs/ConnectUs";

function App() {
  return (
    <div>
      <AppContainer>
        <Header />
        <Intro />
        <About />
        <Clients />
        <Order />
        <Advantages />
        <Payments />
        <ConnectUs />
      </AppContainer>
    </div>
  );
}

export default App;
