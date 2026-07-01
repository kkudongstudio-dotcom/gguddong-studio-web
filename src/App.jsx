import { useState } from "react";

import IntroGateway from "./components/common/IntroGateway";
import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import AboutStudio from "./components/home/AboutStudio";
import CurrentProjects from "./components/home/CurrentProjects";
import BusinessDivisions from "./components/home/BusinessDivisions";
import AiTeam from "./components/home/AiTeam";
import NewsUpdates from "./components/home/NewsUpdates";
import Footer from "./components/layout/Footer";
import SmartNavigation from "./components/common/SmartNavigation";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <IntroGateway onEnter={() => setShowIntro(false)} />
      ) : (
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
      )}
    </>
  );
}

export default App;