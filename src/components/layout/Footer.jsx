import footerLogo from "../../assets/logo/footer_logo.png";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={footerLogo} alt="GGUDDONG.STUDIO footer logo" />

          <p>
            AI로 아이디어를 현실로 만드는 프로젝트 스튜디오
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#business">Business</a>
          <a href="#ai-team">AI Team</a>
          <a href="#news">News</a>
        </div>

        <p className="footer-copy">
          © 2026 GGUDDONG.STUDIO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;