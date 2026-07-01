import { useState } from "react";
import circleLogo from "../../assets/logo/circle_logo.png";

function Header() {
  const [showLoginNotice, setShowLoginNotice] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "BUSINESS", href: "#business" },
    { label: "AI TEAM", href: "#ai-team" },
    { label: "NEWS", href: "#news" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="header-left">
            <a href="#home" className="header-logo">
              <img src={circleLogo} alt="GGUDDONG.STUDIO logo" />
              <span>GGUDDONG.STUDIO</span>
            </a>
          </div>

          <nav className="header-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-right">
            <button
              type="button"
              className="header-login"
              onClick={() => setShowLoginNotice(true)}
            >
              LOGIN
            </button>
          </div>
        </div>
      </header>

      {showLoginNotice && (
        <div className="login-notice">
          <div className="login-notice-card">

            <button
              type="button"
              className="login-notice-close"
              onClick={() => setShowLoginNotice(false)}
            >
              ×
            </button>

            <div className="login-notice-header">

              <img
                src={circleLogo}
                alt="GGUDDONG.STUDIO"
                className="login-notice-logo"
              />

              <span>ERP PORTAL</span>

            </div>

            <h3>ERP 관리자 포털</h3>

            <p>
              GGUDDONG.STUDIO ERP와 연결되는
              관리자 전용 시스템입니다.
              <br />
              현재 개발이 진행 중입니다.
            </p>

            <button
              className="login-notice-confirm"
              onClick={() => setShowLoginNotice(false)}
            >
              확인
            </button>

          </div>
        </div>
      )}
    </>
  );
}

export default Header;