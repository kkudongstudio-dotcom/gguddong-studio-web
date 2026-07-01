function AboutStudio() {
  const processItems = [
    {
      step: "01",
      title: "Plan",
      text: "아이디어의 방향과 구조를 설계합니다.",
    },
    {
      step: "02",
      title: "Build",
      text: "AI와 함께 실제 서비스 형태로 구현합니다.",
    },
    {
      step: "03",
      title: "Automate",
      text: "반복 업무와 운영 흐름을 자동화합니다.",
    },
    {
      step: "04",
      title: "Operate",
      text: "운영 데이터를 바탕으로 서비스를 개선합니다.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container about-inner">
        <div className="about-vision">
          <span className="about-label">ABOUT GGUDDONG.STUDIO</span>

          <h2>
            AI와 함께
            <br />
            실제 서비스를 만듭니다.
          </h2>

          <p>
            GGUDDONG.STUDIO는 아이디어를 기획하고, AI로 자동화하며,
            실제 운영 가능한 프로젝트로 성장시키는 AI 프로젝트 스튜디오입니다.
          </p>
        </div>

        <div className="about-process">
          {processItems.map((item) => (
            <article className="process-card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutStudio;