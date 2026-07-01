function AboutStudio() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <span className="about-label">ABOUT GGUDDONG.STUDIO</span>

          <h2>AI와 함께 실제 서비스를 만듭니다.</h2>

          <p>
            GGUDDONG.STUDIO는 아이디어를 기획하고,
            AI로 자동화하며, 실제 운영 가능한 프로젝트로 성장시키는
            AI 프로젝트 스튜디오입니다.
          </p>
        </div>

        <div className="about-values">
          <div className="value-card">
            <div className="value-icon">💡</div>
            <h4>Build</h4>
            <p>아이디어를 설계합니다.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">⚙️</div>
            <h4>Automate</h4>
            <p>AI로 자동화합니다.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">🚀</div>
            <h4>Operate</h4>
            <p>서비스로 운영합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStudio;