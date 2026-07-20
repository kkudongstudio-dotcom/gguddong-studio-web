import { useState } from "react";
import circleLogo from "../../assets/logo/circle_logo.png";
import { LINKS } from "../../config/links";

function Header() {
  const [showLoginNotice, setShowLoginNotice] = useState(false);

  const navItems = [
    { label: "HOME", href: "/#home" },
    { label: "ABOUT", href: "/#about" },
    { label: "PROJECTS", href: "/#projects" },
    { label: "BUSINESS", href: "/#business" },
    { label: "AI TEAM", href: "/#ai-team" },
    { label: "NEWS", href: "/#news" },
    { label: "CONTACT", href: "/#contact" },
  ];

  const handleAiOsEnter = () => {
  window.open(
    LINKS.AI_OS,
    "_blank",
    "noopener,noreferrer"
  );
};

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="header-left">
            <a href="/#home" className="header-logo">
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
              aria-label="Close internal portal"
            >
              ×
            </button>

            <div className="login-notice-header">
              <img
                src={circleLogo}
                alt="GGUDDONG.STUDIO"
                className="login-notice-logo"
              />

              <span>GGUDDONG INTERNAL PORTAL</span>
            </div>

            <h3>내부 시스템</h3>

            <p>
              GGUDDONG.STUDIO 내부 운영 시스템으로 이동합니다.
              허가된 계정만 AI OS에 접근할 수 있습니다.
            </p>

            <div className="login-portal-list">
              <div>
                <strong>GGUDDONG AI OS</strong>
                <span>본사 AI 운영 및 관제 시스템</span>
              </div>

              <div>
                <strong>ACCESS CONTROL</strong>
                <span>승인된 내부 계정만 접근 가능</span>
              </div>

              <div>
                <strong>SECURE LOGIN</strong>
                <span>Cloudflare Access 인증 적용</span>
              </div>
            </div>

            <button
              type="button"
              className="login-notice-confirm"
              onClick={handleAiOsEnter}
            >
              AI OS 진입
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;