import mainCircleLogo from "../../assets/logo/maincircle_logo.png";

function AiTeam() {
  const aiMembers = [
    {
      name: "LOTTO MASTER AI",
      role: "대표 AI",
      status: "ONLINE",
      statusText: "운영중",
      project: "AI 로또 분석공방",
      work: "추천 엔진 · AI 브리핑 · 결과 검토",
      description:
        "LOTTO WORKSHOP의 추천 흐름과 브리핑을 담당하는 GGUDDONG.STUDIO의 첫 번째 운영 AI입니다.",
      skills: ["추천엔진", "브리핑", "결과분석"],
      type: "main",
    },
    {
      name: "LOGISTICS AI",
      role: "물류 AI",
      status: "BUILDING",
      statusText: "개발중",
      project: "물류 사업부",
      work: "검수 자동화 · ERP 연동 준비",
      description:
        "물류 검수, 수량 비교, 운영 대시보드 자동화를 준비하는 AI입니다.",
      skills: ["ERP", "검수", "자동화"],
      type: "sub",
      initial: "L",
    },
    {
      name: "GAME AI",
      role: "게임 AI",
      status: "PLANNING",
      statusText: "기획중",
      project: "게임 스튜디오",
      work: "세계관 · 캐릭터 · 콘텐츠 기획",
      description:
        "GGUDDONG 세계관과 캐릭터 기반 게임 프로젝트를 설계하는 AI입니다.",
      skills: ["세계관", "캐릭터", "기획"],
      type: "sub",
      initial: "G",
    },
    {
      name: "COMMERCE AI",
      role: "커머스 AI",
      status: "READY",
      statusText: "준비중",
      project: "커머스 사업부",
      work: "브랜드 · 콘텐츠 · 상품 운영",
      description:
        "브랜드 콘텐츠와 상품 운영을 지원하기 위해 준비 중인 커머스 AI입니다.",
      skills: ["브랜드", "콘텐츠", "상품"],
      type: "sub",
      initial: "C",
    },
  ];

  return (
    <section id="ai-team" className="section ai-team-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">AI Team</span>

          <h2>AI 직원이 함께 움직이는 스튜디오</h2>

          <p>
            GGUDDONG.STUDIO는 AI를 단순한 도구가 아니라
            프로젝트를 함께 설계하고 운영하는 팀원으로 활용합니다.
          </p>
        </div>

        <div className="ai-team-board">
          {aiMembers.map((member) => (
            <article
              className={`ai-member-card ${
                member.type === "main" ? "ai-member-main" : ""
              }`}
              key={member.name}
            >
              <div className="ai-card-top">
                <div className="ai-avatar">
                  {member.type === "main" ? (
                    <img src={mainCircleLogo} alt="LOTTO MASTER AI" />
                  ) : (
                    <span>{member.initial}</span>
                  )}
                </div>

                <div className="ai-status-box">
                  <span className={`ai-live-dot ai-status-${member.status.toLowerCase()}`} />
                  <strong>{member.status}</strong>
                  <small>{member.statusText}</small>
                </div>
              </div>

              <div className="ai-member-info">
                <span className="ai-role">{member.role}</span>
                <h3>{member.name}</h3>
                <p>{member.description}</p>
              </div>

              <div className="ai-work-panel">
                <div>
                  <span>담당 프로젝트</span>
                  <strong>{member.project}</strong>
                </div>

                <div>
                  <span>현재 담당 업무</span>
                  <strong>{member.work}</strong>
                </div>
              </div>

              <div className="ai-skills">
                {member.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AiTeam;