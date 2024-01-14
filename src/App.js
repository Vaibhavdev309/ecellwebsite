import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Numbers } from "./components/Numbers";
import { AboutUs } from "./components/AboutUs";
import { Events } from "./components/Events";
import { Renaissance } from "./components/Renaissance";
import { StartUps } from "./components/StartUps";
import { LinesOfApp } from "./components/LinesOfApp";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
    
      <Navbar></Navbar>

      <HeroSection></HeroSection>

      <Numbers></Numbers>

      <AboutUs></AboutUs>

      <Events></Events>

      <Renaissance></Renaissance>

      <StartUps></StartUps>

      <LinesOfApp></LinesOfApp>

      <Footer></Footer>

    </>
  );
}

export default App;
