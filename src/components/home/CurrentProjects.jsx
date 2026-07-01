function CurrentProjects() {
  const projects = [
    {
      title: "AI 로또 분석공방",
      subTitle: "LOTTO WORKSHOP",
      status: "운영중",
      statusClass: "active",
      progress: 95,
      version: "V2.0",
      updated: "2026.06.29",
      lastUpdate: "추천엔진 개선 완료",
      keywords: ["AI 번호분석", "추천엔진", "AI 브리핑", "결과기록"],
    },
    {
      title: "물류 ERP",
      subTitle: "LOGISTICS ERP",
      status: "개발중",
      statusClass: "develop",
      progress: 60,
      version: "V1.0",
      updated: "2026.06.29",
      lastUpdate: "검수 자동화 구조 설계 중",
      keywords: ["검수", "자동화", "대시보드"],
    },
    {
      title: "GAME STUDIO",
      subTitle: "HEALING GAME PROJECT",
      status: "기획중",
      statusClass: "planning",
      progress: 20,
      version: "Planning",
      updated: "2026.06.29",
      lastUpdate: "세계관 및 캐릭터 방향 기획 중",
      keywords: ["세계관", "캐릭터", "힐링 게임"],
    },
    {
      title: "COMMERCE",
      subTitle: "COMMERCE DIVISION",
      status: "준비중",
      statusClass: "ready",
      progress: 10,
      version: "Ready",
      updated: "2026.06.29",
      lastUpdate: "브랜드 상품 및 콘텐츠 구조 준비 중",
      keywords: ["브랜드", "상품", "콘텐츠"],
    },
  ];

  return (
    <section
  id="projects"
  className="section current-projects-section"
>
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Current Projects</span>
          <h2>현재 운영 현황</h2>
          <p>
            GGUDDONG.STUDIO는 아이디어를 실제 서비스로 만들기 위해
            여러 프로젝트를 단계별로 구축하고 운영하고 있습니다.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-top">
                <div>
                  <p>{project.subTitle}</p>
                  <h3>{project.title}</h3>
                </div>

                <span className={`project-status ${project.statusClass}`}>
                  {project.status}
                </span>
              </div>

              <div className="project-progress">
                <div className="project-progress-info">
                  <span>진행률</span>
                  <strong>{project.progress}%</strong>
                </div>

                <div className="project-progress-bar">
                  <div style={{ width: `${project.progress}%` }} />
                </div>
              </div>

              <div className="project-meta">
                <div>
                  <span>Version</span>
                  <strong>{project.version}</strong>
                </div>

                <div>
                  <span>Updated</span>
                  <strong>{project.updated}</strong>
                </div>
              </div>

              <div className="project-update">
                <span>Last Update</span>
                <p>{project.lastUpdate}</p>
              </div>

              <div className="project-keywords">
                {project.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentProjects;