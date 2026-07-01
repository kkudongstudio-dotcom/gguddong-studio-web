import { useState } from "react";
import footerLogo from "../../assets/logo/footer_logo.png";

function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const handlePreparingClick = () => {
    alert("현재 준비 중인 사업부입니다.");
  };

  const closeModal = () => {
    setActiveModal(null);
  };

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
          <a
            href="https://ai-lottogongbang.kr"
            target="_blank"
            rel="noopener noreferrer"
          >
            LOTTO WORKSHOP
          </a>

          <button type="button" onClick={handlePreparingClick}>
            LOGISTICS
          </button>

          <button type="button" onClick={handlePreparingClick}>
            GAME STUDIO
          </button>

          <button type="button" onClick={handlePreparingClick}>
            COMMERCE
          </button>
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

        <div className="footer-version">Website Version V1.2</div>

        <div className="footer-bottom">
          <span>© 2026 GGUDDONG.STUDIO. All rights reserved.</span>

          <div className="footer-links">
            <button type="button" onClick={() => setActiveModal("privacy")}>
              Privacy Policy
            </button>

            <span>|</span>

            <button type="button" onClick={() => setActiveModal("terms")}>
              Terms of Service
            </button>

            <span>|</span>

            <button type="button" onClick={() => setActiveModal("contact")}>
              Contact
            </button>
          </div>
        </div>
      </div>

      {activeModal && (
        <div className="footer-policy-modal">
          <div className="footer-policy-card">
            <button
              type="button"
              className="footer-policy-close"
              onClick={closeModal}
              aria-label="Close policy modal"
            >
              ×
            </button>

            {activeModal === "privacy" && (
              <>
                <h3>Privacy Policy</h3>
                <p>
                  GGUDDONG.STUDIO는 방문자의 개인정보를 중요하게 생각합니다.
                  현재 본 공식 홈페이지는 회원가입, 결제, 댓글 기능을 제공하지
                  않으며, 방문자로부터 직접 개인정보를 수집하지 않습니다.
                </p>
                <p>
                  단, 서비스 운영 과정에서 Google Search Console, Cloudflare,
                  광고 및 분석 도구 등 외부 서비스가 비식별 접속 정보를 처리할 수
                  있습니다. 이러한 정보는 사이트 안정성, 검색 노출, 서비스 개선을
                  위한 목적으로만 활용됩니다.
                </p>
                <p>
                  향후 문의 채널, 회원 기능, ERP 연동 기능이 추가될 경우
                  개인정보 처리방침은 그에 맞게 업데이트됩니다.
                </p>
              </>
            )}

            {activeModal === "terms" && (
              <>
                <h3>Terms of Service</h3>
                <p>
                  GGUDDONG.STUDIO 공식 홈페이지는 브랜드 소개, 프로젝트 현황,
                  서비스 안내를 제공하기 위한 웹사이트입니다.
                </p>
                <p>
                  홈페이지에 표시되는 프로젝트 상태, 일정, 서비스 내용은 운영
                  상황에 따라 변경될 수 있습니다. 제공되는 정보는 일반 안내 목적이며,
                  특정 결과나 수익을 보장하지 않습니다.
                </p>
                <p>
                  외부 서비스로 이동하는 링크는 각 서비스의 운영 정책을 따릅니다.
                  사용자는 본 사이트를 정상적인 목적과 방식으로 이용해야 합니다.
                </p>
              </>
            )}

            {activeModal === "contact" && (
              <>
                <h3>Contact</h3>
                <p>
                  GGUDDONG.STUDIO의 공식 문의 채널은 준비 중입니다.
                </p>
                <p>
                  현재는 공식 홈페이지와 연결된 프로젝트 및 서비스 운영 상태를
                  순차적으로 정비하고 있습니다.
                </p>
                <p>
                  문의 채널이 확정되면 본 Footer 영역과 공식 홈페이지를 통해
                  안내하겠습니다.
                </p>
              </>
            )}

            <button
              type="button"
              className="footer-policy-confirm"
              onClick={closeModal}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;