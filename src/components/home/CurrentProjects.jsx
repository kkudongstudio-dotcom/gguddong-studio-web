import { useState } from "react";

function CurrentProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

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
      href: "https://ai-lottogongbang.kr",
      ready: true,
      buttonText: "서비스 바로가기",
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
      href: null,
      ready: false,
      buttonText: "준비중",
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
      href: null,
      ready: false,
      buttonText: "기획중",
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
      href: null,
      ready: false,
      buttonText: "준비중",
    },
  ];

  return (
    <section id="projects" className="section current-projects-section">
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

              {project.ready ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action"
                >
                  {project.buttonText}
                  <span>→</span>
                </a>
              ) : (
                <button
                  type="button"
                  className="project-action"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.buttonText}
                  <span>→</span>
                </button>
              )}
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="login-notice">
          <div className="login-notice-card">
            <button
              type="button"
              className="login-notice-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close notice"
            >
              ×
            </button>

            <h3>{selectedProject.title}</h3>

            <p>
              현재 {selectedProject.status} 단계의 프로젝트입니다.
              <br />
              추후 서비스 연결이 준비되면 공식 홈페이지에서 안내됩니다.
            </p>

            <button
              type="button"
              className="login-notice-confirm"
              onClick={() => setSelectedProject(null)}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default CurrentProjects;