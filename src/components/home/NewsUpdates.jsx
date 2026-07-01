function NewsUpdates() {
  const updates = [
    {
      type: "DEPLOY",
      title: "GGUDDONG.STUDIO 공식 홈페이지 V1 오픈",
      date: "2026.07",
      status: "완료",
      description:
        "React + Vite 기반 공식 홈페이지를 구축하고 Cloudflare Pages 배포 및 도메인 연결을 완료했습니다.",
    },
    {
      type: "WEBSITE",
      title: "AI Team 섹션 리뉴얼",
      date: "2026.07",
      status: "적용",
      description:
        "AI 직원을 단순 카드가 아닌 실제 운영팀처럼 보이도록 구성했습니다.",
    },
    {
      type: "LOTTO",
      title: "LOTTO WORKSHOP 운영 시스템 고도화",
      date: "진행중",
      status: "운영",
      description:
        "AI 로또 분석공방의 추천 엔진, 브리핑, 결과 검토 흐름을 개선하고 있습니다.",
    },
    {
      type: "ERP",
      title: "GGUDDONG ERP 관리자 포털 준비",
      date: "개발중",
      status: "구축",
      description:
        "공식 홈페이지와 내부 ERP, 사업부 운영 시스템을 연결하기 위한 구조를 준비 중입니다.",
    },
  ];

  return (
    <section id="news" className="section news-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Studio Activity</span>

          <h2>GGUDDONG.STUDIO 운영 로그</h2>

          <p>
            공식 홈페이지, 서비스, ERP, 사업부 프로젝트의 진행 상황을
            스튜디오 활동 기록으로 정리합니다.
          </p>
        </div>

        <div className="activity-timeline">
          {updates.map((item) => (
            <article className="activity-card" key={item.title}>
              <div className="activity-left">
                <span className={`activity-badge activity-${item.type.toLowerCase()}`}>
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsUpdates;