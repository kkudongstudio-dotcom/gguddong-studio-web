const stories = [
  {
    step: "01",
    title: "하나의 질문",
    text: "AI가 로또를 분석할 수 있을까?",
  },
  {
    step: "02",
    title: "첫 번째 프로젝트",
    text: "AI 로또 분석공방과 LOTTO WORKSHOP이 시작되었습니다.",
  },
  {
    step: "03",
    title: "운영 시스템",
    text: "프로젝트를 관리하기 위해 ERP와 진화엔진 구조를 만들었습니다.",
  },
  {
    step: "04",
    title: "브랜드 확장",
    text: "물류, 게임, 커머스까지 확장 가능한 AI 프로젝트 스튜디오로 발전하고 있습니다.",
  },
];

function BrandStory() {
  return (
    <section className="brand-story-section">
      <div className="container">
        <div className="section-heading">
          <span>BRAND STORY</span>
          <h2>하나의 질문에서 시작된 프로젝트</h2>
          <p>
            GGUDDONG.STUDIO는 거창한 계획보다 작은 질문과 실행에서 시작되었습니다.
          </p>
        </div>

        <div className="story-timeline">
          {stories.map((item) => (
            <article className="story-card" key={item.step}>
              <div className="story-step">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandStory;