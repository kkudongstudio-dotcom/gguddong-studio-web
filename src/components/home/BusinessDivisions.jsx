function BusinessDivisions() {
  const divisions = [
    {
      title: "AI 로또 분석공방",
      label: "LOTTO WORKSHOP",
      status: "운영중",
      color: "purple",
      description:
        "AI 추천 엔진과 브리핑을 기반으로 운영되는 첫 번째 공개 서비스입니다.",
      linkText: "서비스 보기",
      href: "https://ai-lottogongbang.kr",
      isExternal: true,
    },
    {
      title: "물류 사업부",
      label: "LOGISTICS DIVISION",
      status: "준비중",
      color: "orange",
      description:
        "물류 검수, 입고, 반출, 수량 비교 자동화를 위한 운영 시스템입니다.",
      linkText: "준비중",
      href: "#business",
      isExternal: false,
    },
    {
      title: "게임 스튜디오",
      label: "GAME STUDIO",
      status: "기획중",
      color: "mint",
      description:
        "청룡 꾸똥이 세계관과 캐릭터를 기반으로 확장될 게임 프로젝트입니다.",
      linkText: "기획중",
      href: "#business",
      isExternal: false,
    },
    {
      title: "커머스 사업부",
      label: "COMMERCE DIVISION",
      status: "준비중",
      color: "green",
      description:
        "브랜드 콘텐츠와 상품 운영을 연결하는 커머스 프로젝트입니다.",
      linkText: "준비중",
      href: "#business",
      isExternal: false,
    },
  ];

  return (
    <section id="business" className="section business-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Business Divisions</span>

          <h2>GGUDDONG.STUDIO의 사업부</h2>

          <p>
            각 사업부는 독립된 프로젝트처럼 움직이고,
            내부 ERP와 AI 운영 시스템을 통해 점진적으로 연결됩니다.
          </p>
        </div>

        <div className="business-grid">
          {divisions.map((division) => (
            <article
              className={`business-card business-${division.color}`}
              key={division.label}
            >
              <div className="business-card-top">
                <span className="business-label">{division.label}</span>
                <span className="business-status">{division.status}</span>
              </div>

              <h3>{division.title}</h3>

              <p>{division.description}</p>

              <a
                href={division.href}
                className="business-link"
                target={division.isExternal ? "_blank" : undefined}
                rel={division.isExternal ? "noreferrer" : undefined}
              >
                {division.linkText}
                <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessDivisions;