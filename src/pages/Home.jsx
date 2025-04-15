import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import EditorsPick from "../components/EditorsPick";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <VideoSection />
      <EditorsPick />
      <Footer />
    </div>
  );
};

export default Home;
