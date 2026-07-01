function AiTeam() {
  const handlePreparingClick = () => {
    alert("현재 준비 중인 AI 프로젝트입니다.");
  };

  const aiMembers = [
    {
      name: "LOTTO MASTER AI",
      role: "대표 AI",
      status: "운영중",
      description:
        "AI 로또 분석공방의 추천 엔진과 브리핑을 운영하는 메인 AI입니다.",
      skills: ["추천엔진", "AI 브리핑", "결과 분석"],
      button: "서비스 보기",
      href: "https://ai-lottogongbang.kr",
      ready: true,
    },
    {
      name: "LOGISTICS AI",
      role: "물류 AI",
      status: "개발중",
      description:
        "물류 ERP와 검수 자동화를 지원하는 AI 프로젝트입니다.",
      skills: ["ERP", "검수 자동화", "운영 대시보드"],
      button: "준비중",
      href: null,
      ready: false,
    },
    {
      name: "GAME AI",
      role: "게임 AI",
      status: "기획중",
      description:
        "세계관과 캐릭터를 함께 설계하는 게임 스튜디오 전용 AI입니다.",
      skills: ["세계관", "캐릭터", "기획"],
      button: "기획중",
      href: null,
      ready: false,
    },
    {
      name: "COMMERCE AI",
      role: "커머스 AI",
      status: "준비중",
      description:
        "브랜드와 콘텐츠 제작을 지원하는 커머스 전용 AI입니다.",
      skills: ["브랜드", "콘텐츠", "상품"],
      button: "준비중",
      href: null,
      ready: false,
    },
  ];

  return (
    <section id="ai-team" className="section ai-team-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">AI Team</span>

          <h2>AI와 함께 움직이는 스튜디오</h2>

          <p>
            GGUDDONG.STUDIO는 AI를 단순한 도구가 아니라
            프로젝트를 함께 설계하고 운영하는 팀원으로 활용합니다.
          </p>
        </div>

        <div className="ai-grid">
          {aiMembers.map((member) => (
            <article className="ai-card" key={member.name}>
              <div className="ai-icon">GG</div>

              <span className="ai-role">{member.role}</span>

              <h3>{member.name}</h3>

              <span className="ai-status">● {member.status}</span>

              <p className="ai-description">{member.description}</p>

              <div className="ai-skills">
                {member.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              {member.ready ? (
                <a
                  href={member.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ai-button"
                >
                  {member.button}
                </a>
              ) : (
                <button
                  type="button"
                  className="ai-button"
                  onClick={handlePreparingClick}
                >
                  {member.button}
                </button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AiTeam;