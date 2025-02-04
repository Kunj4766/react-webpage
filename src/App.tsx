import React from "react";
import "./App.css";
import CommunitiesGrid from "./components/Communities";
import ServicesCarousel from "./components/Services";

function App() {
  return (
    <React.Fragment>
      <CommunitiesGrid />
      <ServicesCarousel />
    </React.Fragment>
  );
}

export default App;
