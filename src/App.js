import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import JobSearch from "./components/JobSearch";
import QuickSearch from "./components/QuickSearch";
import FeaturedJobCard from "./components/FeaturedJobCard";
import RemoteJobs from "./components/RemoteJobCard";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer.js";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <JobSearch />
      <QuickSearch />
      <FeaturedJobCard />
      <RemoteJobs />
      <Footer />
      <Navbar2 />
    </div>
  );
};

export default App;
