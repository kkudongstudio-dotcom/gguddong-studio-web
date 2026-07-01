import footerLogo from "../../assets/logo/footer_logo.png";

function Footer() {
  return (
    <footer id="contact" className="site-footer footer-v3">
      <div className="container footer-inner">
        <div className="footer-brand-end">
          <img
            src={footerLogo}
            alt="GGUDDONG.STUDIO"
            className="footer-main-logo"
          />

          <p className="footer-slogan">
            AI와 함께 아이디어를 현실로 만듭니다.
          </p>
        </div>

        <div className="footer-business-row">
          <span>LOTTO WORKSHOP</span>
          <span>LOGISTICS</span>
          <span>GAME STUDIO</span>
          <span>COMMERCE</span>
        </div>

        <div className="footer-status-row">
          <span>
            <i className="status-dot online" />
            Website
          </span>

          <span>
            <i className="status-dot building" />
            ERP
          </span>

          <span>
            <i className="status-dot online" />
            LOTTO
          </span>
        </div>

        <div className="footer-version">
          Website Version V1.2
        </div>

        <div className="footer-bottom">
          <span>© 2026 GGUDDONG.STUDIO. All rights reserved.</span>
          <span>Powered by AI Project Studio</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;