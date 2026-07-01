import footerLogo from "../../assets/logo/footer_logo.png";

function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={footerLogo} alt="GGUDDONG.STUDIO" />

          <div>
            <h2>GGUDDONG.STUDIO</h2>
            <p>AI PROJECT STUDIO</p>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-column">
            <h3>Studio</h3>
            <p>
              GGUDDONG.STUDIO는 AI를 활용해 아이디어를 실제 서비스와
              운영 시스템으로 발전시키는 프로젝트 스튜디오입니다.
            </p>
          </div>

          <div className="footer-column">
            <h3>Business</h3>
            <ul>
              <li>AI 로또 분석공방</li>
              <li>LOTTO WORKSHOP</li>
              <li>Logistics Division</li>
              <li>Game Studio</li>
              <li>Commerce Division</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>Official Website</li>
              <li>gguddong.studio</li>
              <li>공식 문의 채널 준비 중</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 GGUDDONG.STUDIO. All rights reserved.</span>
          <span>Built with React + Vite</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;