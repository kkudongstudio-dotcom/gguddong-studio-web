import { useState } from "react";
import { LINKS } from "../../config/links";

function BusinessDivisions() {
  const [selectedDivision, setSelectedDivision] = useState(null);

  const divisions = [
    {
      title: "AI 로또 분석공방",
      label: "LOTTO WORKSHOP",
      status: "운영중",
      color: "purple",
      description:
        "AI 추천 엔진과 브리핑을 기반으로 운영되는 첫 번째 공개 서비스입니다.",
      href: LINKS.LOTTO_WORKSHOP,
      external: true,
    },
    {
      title: "물류 사업부",
      label: "LOGISTICS DIVISION",
      status: "준비중",
      color: "orange",
      description: "물류 검수 및 ERP 자동화를 준비 중인 프로젝트입니다.",
      href: LINKS.LOGISTICS,
      external: false,
    },
    {
      title: "게임 스튜디오",
      label: "GAME STUDIO",
      status: "기획중",
      color: "mint",
      description: "청룡 꾸똥이 세계관을 기반으로 한 게임 프로젝트입니다.",
      href: LINKS.GAME_STUDIO,
      external: false,
    },
    {
      title: "커머스 사업부",
      label: "COMMERCE DIVISION",
      status: "준비중",
      color: "green",
description: "브랜드와 콘텐츠를 연결하는 커머스 플랫폼입니다.",
      href: LINKS.COMMERCE,
      external: false,
    },
  ];

  return (
    <section id="business" className="section business-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Business Divisions</span>

          <h2>GGUDDONG.STUDIO의 사업부</h2>

          <p>
            각 사업부는 독립적으로 운영되며 향후 ERP와 연결됩니다.
          </p>
        </div>

        <div className="business-grid">
          {divisions.map((division) => (
            <article
              key={division.label}
              className={`business-card business-${division.color}`}
            >
              <div className="business-card-top">
                <span className="business-label">{division.label}</span>
                <span className="business-status">{division.status}</span>
              </div>

              <h3>{division.title}</h3>

              <p>{division.description}</p>

              {division.external ? (
                <a
                  className="business-link"
                  href={division.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  서비스 바로가기
                  <span>→</span>
                </a>
              ) : (
                <button
                  type="button"
                  className="business-link"
                  onClick={() => setSelectedDivision(division)}
                >
                  준비중
                  <span>→</span>
                </button>
              )}
            </article>
          ))}
        </div>
      </div>

      {selectedDivision && (
        <div className="login-notice">
          <div className="login-notice-card">
            <button
              type="button"
              className="login-notice-close"
              onClick={() => setSelectedDivision(null)}
              aria-label="Close notice"
            >
              ×
            </button>

            <h3>{selectedDivision.title}</h3>

            <p>
              {selectedDivision.title}는 현재 준비 중인 사업부입니다.
              <br />
              추후 서비스가 오픈될 예정입니다.
            </p>

            <button
              type="button"
              className="login-notice-confirm"
              onClick={() => setSelectedDivision(null)}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default BusinessDivisions;