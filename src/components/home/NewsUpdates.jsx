import { useState } from "react";

function NewsUpdates() {
  const [selectedUpdate, setSelectedUpdate] = useState(null);

  const updates = [
    {
      type: "ERP",
      title: "GGUDDONG ERP V2 제작 50% 진행",
      date: "2026.07",
      status: "개발중",
      description:
        "GGUDDONG ERP V2 React Edition을 중심으로 내부 운영 시스템과 관리자 포털 리모델링을 진행하고 있습니다.",
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
        "AI 로또 분석공방의 추천 엔진, 브리핑, 결과 검토 흐름을 개선하고 있습니다.",
      href: "https://ai-lottogongbang.kr",
      ready: true,
      buttonText: "서비스 보기",
    },
    {
  type: "ERP",
  title: "ERP 관리자 포털 구축 준비",
  date: "예정",
  status: "준비중",
  description:
    "GGUDDONG.STUDIO 공식 홈페이지와 연동되는 ERP 관리자 포털 구축을 준비하고 있습니다. ERP 완성 후 로그인 기능과 함께 정식 오픈될 예정입니다.",
  href: null,
  ready: false,
  buttonText: "준비중",
},
  ];

  return (
    <section id="news" className="section news-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Studio Activity</span>

          <h2>GGUDDONG.STUDIO 운영 로그</h2>

          <p>
            공식 홈페이지, 서비스, ERP, 콘텐츠 센터의 진행 상황을
            스튜디오 활동 기록으로 정리합니다.
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