import { useEffect, useState } from "react";
import "./App.css";
import IntroGateway from "./components/common/IntroGateway.jsx";
import Header from "./components/layout/Header.jsx";
import Hero from "./components/home/Hero.jsx";
import BusinessDivisions from "./components/home/BusinessDivisions.jsx";
import AboutStudio from "./components/home/AboutStudio.jsx";
import CurrentProjects from "./components/home/CurrentProjects.jsx";
import AiTeam from "./components/home/AiTeam.jsx";
import NewsUpdates from "./components/home/NewsUpdates.jsx";
import Footer from "./components/layout/Footer.jsx";
import SmartNavigation from "./components/common/SmartNavigation.jsx";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const savedDate = localStorage.getItem("gguddongIntroSkipDate");

    if (savedDate === today) {
      setShowIntro(false);
    }
  }, []);

  if (showIntro) {
    return <IntroGateway onEnter={() => setShowIntro(false)} />;
  }

  return (
 <>
    <Header />
    <Hero />
    <AboutStudio />
    <CurrentProjects />
    <BusinessDivisions />
    <AiTeam />
    <NewsUpdates />
    <Footer />
    <SmartNavigation />
  </>
);
}
export default App;
