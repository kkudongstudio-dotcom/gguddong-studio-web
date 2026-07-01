const divisions = [
  {
    color: "purple",
    label: "운영중",
    title: "AI 로또 분석공방",
    subTitle: "LOTTO WORKSHOP",
    description: "AI 기반 번호 분석, 추천 엔진, 결과 기록을 운영하는 로또 분석 플랫폼입니다.",
    items: ["번호 분석", "추천 엔진", "AI 브리핑"],
    button: "입장하기",
  },
  {
    color: "orange",
    label: "개발중",
    title: "물류 사업부",
    subTitle: "LOGISTICS DIVISION",
    description: "현장 업무와 데이터를 연결하는 물류 자동화 및 ERP 기반 운영 시스템입니다.",
    items: ["물류 ERP", "검수 자동화", "운영 대시보드"],
    button: "준비중",
  },
  {
    color: "mint",
    label: "기획중",
    title: "게임 스튜디오",
    subTitle: "GAME STUDIO",
    description: "AI와 함께 만드는 힐링 중심의 게임 프로젝트를 준비하고 있습니다.",
    items: ["세계관", "캐릭터", "힐링 게임"],
    button: "준비중",
  },
  {
    color: "green",
    label: "준비중",
    title: "커머스 사업부",
    subTitle: "COMMERCE DIVISION",
    description: "브랜드와 상품, 콘텐츠를 연결하는 커머스 플랫폼을 준비하고 있습니다.",
    items: ["브랜드", "상품", "콘텐츠"],
    button: "준비중",
  },
];

function BusinessDivisions() {
  return (
   <section id="business" className="section divisions-section">
      <div className="container">
        <div className="section-heading">
          <span>사업부</span>
          <h2>GGUDDONG.STUDIO의 프로젝트 사업부</h2>
          <p>
  아이디어를 실제 서비스로 만들고,
  운영 가능한 프로젝트로 성장시킵니다.
</p>
        </div>

        <div className="division-grid">
          {divisions.map((item) => (
            <article className={`division-card ${item.color}`} key={item.title}>
              <div className="division-top">
                <span className="division-label">{item.label}</span>
                <span className="division-dot"></span>
              </div>

              <div>
                <strong>{item.subTitle}</strong>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <ul className="division-items">
                {item.items.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <button className="division-btn">{item.button}</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessDivisions;