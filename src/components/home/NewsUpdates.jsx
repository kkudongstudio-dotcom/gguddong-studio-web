import { useState } from "react";

function NewsUpdates() {
  const [selectedUpdate, setSelectedUpdate] = useState(null);

  const updates = [
    {
  type: "LOTTO",
  title: "Stage2 Judge System 1차 리팩토링 완료",
  date: "2026.07",
  status: "완료",
  description:
    "GGUDDONG LOTTO ENGINE V3 Stage2 Judge System의 1차 리팩토링을 완료했습니다. Review Judge, Final Judge, Judge Result Standard, Common Rule Engine, Selector, Reason Builder, Reader, Sheet Manager, Controller 구조를 분리하고 통합 테스트 runEvolutionFinalStageAllV31 실행을 정상 확인했습니다.",
  href: null,
  ready: false,
  buttonText: "준비중",
},
    {
      type: "LOTTO",
      title: "LOTTO ENGINE V3 Stage2 Judge 시스템 구축",
      date: "2026.07",
      status: "개발중",
      description:
        "기존 압축 방식에서 벗어나 Review Judge와 Final Judge를 중심으로 AI 심사 구조를 구축했습니다. Generator → Review Judge → Final Judge 구조로 요일별 역할을 분리하여 독립적인 판단 시스템으로 개선했습니다.",
      href: null,
      ready: false,
      buttonText: "준비중",
    },
    {
      type: "AI",
      title: "Judge Result Standard 적용 완료",
      date: "2026.07",
      status: "완료",
      description:
        "모든 Judge가 동일한 결과 형식을 사용하도록 PASS / WARN / FAIL, Score, Confidence, Reason, Evidence 표준 구조를 적용했습니다.",
      href: null,
      ready: false,
      buttonText: "준비중",
    },
    {
      type: "ENGINE",
      title: "Stage2 운영 검증 시작",
      date: "2026.07",
      status: "진행중",
      description:
        "20개 후보를 대상으로 Review Judge 자동 심사를 수행하고 있으며, 기존 압축 방식과 비교하여 Stage2 운영 검증을 진행하고 있습니다.",
      href: null,
      ready: false,
      buttonText: "준비중",
    },
    {
      type: "ERP",
      title: "GGUDDONG AI OS 구축 진행",
      date: "2026.07",
      status: "개발중",
      description:
        "React 기반 AI 운영체제(OS)를 구축 중입니다. 대표 작업실, AI 본사, 사업부 관제센터를 하나의 운영 플랫폼으로 통합하고 있습니다.",
      href: null,
      ready: false,
      buttonText: "준비중",
    },
    {
      type: "CONTENT",
      title: "콘텐츠 센터 제작 착수",
      date: "2026.07",
      status: "착수",
      description:
        "GGUDDONG.STUDIO의 콘텐츠 제작, 운영 기록, 업데이트 관리를 위한 Content Center 구축을 시작했습니다.",
      href: null,
      ready: false,
      buttonText: "준비중",
    },
    {
      type: "DEPLOY",
      title: "GGUDDONG.STUDIO 공식 홈페이지 V1 오픈",
      date: "2026.07",
      status: "완료",
      description:
        "React + Vite 기반 공식 홈페이지를 구축하고 Cloudflare Pages 배포 및 gguddong.studio 도메인 연결을 완료했습니다.",
      href: "https://gguddong.studio",
      ready: true,
      buttonText: "홈페이지 보기",
    },
    {
      type: "LOTTO",
      title: "LOTTO WORKSHOP 운영 시스템 고도화",
      date: "진행중",
      status: "운영",
      description:
        "AI 로또 분석공방의 추천 엔진, 브리핑, 결과 검토 흐름을 지속적으로 개선하고 있습니다.",
      href: "https://ai-lottogongbang.kr",
      ready: true,
      buttonText: "서비스 보기",
    },
  ];

  return (
    <section id="news" className="section news-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Studio Activity</span>

          <h2>GGUDDONG.STUDIO 운영 로그</h2>

          <p>
            공식 홈페이지, 서비스, AI OS, LOTTO ENGINE, 콘텐츠 센터의 진행
            상황을 스튜디오 활동 기록으로 정리합니다.
          </p>
        </div>

        <div className="activity-timeline">
          {updates.map((item) => (
            <article className="activity-card" key={item.title}>
              <div className="activity-left">
                <span
                  className={`activity-badge activity-${item.type.toLowerCase()}`}
                >
                  {item.type}
                </span>

                <strong>{item.date}</strong>
              </div>

              <div className="activity-content">
                <div className="activity-title-row">
                  <h3>{item.title}</h3>
                  <span>{item.status}</span>
                </div>

                <p>{item.description}</p>

                {item.ready ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="activity-link"
                  >
                    {item.buttonText}
                    <span>→</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    className="activity-link"
                    onClick={() => setSelectedUpdate(item)}
                  >
                    {item.buttonText}
                    <span>→</span>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedUpdate && (
        <div className="login-notice">
          <div className="login-notice-card">
            <button
              type="button"
              className="login-notice-close"
              onClick={() => setSelectedUpdate(null)}
              aria-label="Close notice"
            >
              ×
            </button>

            <h3>{selectedUpdate.title}</h3>

            <p>
              현재 준비 중인 항목입니다.
              <br />
              추후 공식 홈페이지에서 업데이트됩니다.
            </p>

            <button
              type="button"
              className="login-notice-confirm"
              onClick={() => setSelectedUpdate(null)}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default NewsUpdates;