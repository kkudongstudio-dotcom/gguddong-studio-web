import { useState } from "react";
import introLogo from "../../assets/logo/maincircle_logo.png";

function IntroGateway({ onEnter }) {
  const [skipToday, setSkipToday] = useState(false);

  const handleEnter = () => {
    if (skipToday) {
      const today = new Date().toISOString().slice(0, 10);
      localStorage.setItem("gguddongIntroSkipDate", today);
    }

    onEnter();
  };

  return (
    <section className="intro-page">
      <div className="intro-card">

        <img
          src={introLogo}
          alt="GGUDDONG.STUDIO"
          className="intro-logo-image"
        />

        <h1>
          GGUDDONG
          <br />
          STUDIO
        </h1>

        <p className="intro-subtitle">
          AI PROJECT STUDIO
        </p>

        <button
          className="intro-enter-btn"
          onClick={handleEnter}
        >
          GGUDDONG.STUDIO
        </button>

        <label className="intro-checkbox">
          <input
            type="checkbox"
            checked={skipToday}
            onChange={(e) => setSkipToday(e.target.checked)}
          />

          오늘 하루 보지 않기
        </label>

      </div>
    </section>
  );
}

export default IntroGateway;