import { useState } from "react";
import circleLogo from "../../assets/logo/circle_logo.png";

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
              aria-label="Close login notice"
            >
              ×
            </button>

            <div className="login-notice-header">
              <img
                src={circleLogo}
                alt="GGUDDONG.STUDIO"
                className="login-notice-logo"
              />

              <span>GGUDDONG ERP PORTAL</span>
            </div>

            <h3>관리자 포털 준비 중</h3>

            <p>
              이 영역은 GGUDDONG.STUDIO의 내부 ERP와
              각 사업부 운영 시스템을 연결하기 위한 관리자 전용 입구입니다.
            </p>

            <div className="login-portal-list">
              <div>
                <strong>ERP</strong>
                <span>본사 관리자 시스템</span>
              </div>

              <div>
                <strong>LOTTO WORKSHOP V2</strong>
                <span>AI 로또 분석공방 운영 시스템</span>
              </div>

              <div>
                <strong>DIVISION CONTROL</strong>
                <span>사업부별 운영 대시보드</span>
              </div>
            </div>

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