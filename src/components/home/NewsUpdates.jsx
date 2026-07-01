function NewsUpdates() {
  const updates = [
    {
      date: "2026.06.30",
      title: "GGUDDONG.STUDIO 공식 홈페이지 구축",
      category: "Homepage",
      description:
        "React 기반 공식 홈페이지 구축을 진행 중입니다.",
    },
    {
      date: "2026.06.29",
      title: "Current Projects 섹션 추가",
      category: "Development",
      description:
        "프로젝트 운영 현황과 진행률을 확인할 수 있는 섹션을 구축했습니다.",
    },
    {
      date: "2026.06.28",
      title: "AI Team 섹션 설계",
      category: "AI",
      description:
        "GGUDDONG.STUDIO의 AI 운영 구조와 역할을 정리했습니다.",
    },
    {
      date: "Coming Soon",
      title: "ERP 실시간 연동",
      category: "Future",
      description:
        "향후 ERP와 연결하여 홈페이지에 실시간 운영 현황을 표시할 예정입니다.",
    },
  ];

  return (
    <section id="news" className="section news-section">
      <div className="container">

        <div className="section-heading">
          <span className="section-label">News & Updates</span>

          <h2>최근 업데이트</h2>

          <p>
            GGUDDONG.STUDIO의 프로젝트 진행 상황과
            주요 업데이트를 기록합니다.
          </p>
        </div>

        <div className="news-list">

          {updates.map((item) => (

            <article className="news-card" key={item.title}>

              <div className="news-date">
                {item.date}
              </div>

              <div className="news-content">

                <span className="news-category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

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