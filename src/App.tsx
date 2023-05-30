import React from "react";

import Header from "./components/Header/Header";
import AppContainer from "./components/AppContainer/AppContainer";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <AppContainer>
        <Header />
        <Intro />
        <About />
      </AppContainer>
    </div>
  );
}

export default App;
