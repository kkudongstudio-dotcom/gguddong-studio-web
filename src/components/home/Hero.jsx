import heroLogo from "../../assets/logo/maincircle_logo.png";

function Hero() {
  const stats = [
    {
      title: "PROJECTS",
      value: "4",
      label: "운영 프로젝트",
    },
    {
      title: "AI STAFF",
      value: "4",
      label: "AI Team",
    },
    {
      title: "STATUS",
      value: "LIVE",
      label: "서비스 운영중",
    },
    {
      title: "UPDATED",
      value: "2026.07.01",
      label: "공식 홈페이지 오픈",
    },
  ];

  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">AI PROJECT STUDIO</div>

          <h1>
            AI로 아이디어를
            <br />
            현실로 만듭니다.
          </h1>

          <p>
            GGUDDONG.STUDIO는 AI와 함께 실제 서비스를 만들고,
            운영 가능한 프로젝트로 성장시키는 AI 프로젝트 스튜디오입니다.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn">
              현재 운영 현황 보기
            </a>

            <a href="#business" className="btn btn-secondary">
              사업부 둘러보기
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-card">
            <img src={heroLogo} alt="GGUDDONG.STUDIO 대표 캐릭터" />
            <span>GGUDDONG DRAGON</span>
            <strong>AI PROJECT STUDIO</strong>
          </div>
        </div>

        <div className="hero-stats">
          {stats.map((item) => (
            <div className="hero-stat-card" key={item.title}>
              <span className="hero-stat-title">{item.title}</span>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;