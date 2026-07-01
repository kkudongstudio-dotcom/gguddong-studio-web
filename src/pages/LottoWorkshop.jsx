import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SmartNavigation from "../components/common/SmartNavigation";

function LottoWorkshop() {
  return (
    <>
      <Header />

      <main className="division-page division-lotto">
        <section className="division-hero">
          <div className="container division-hero-inner">
            <span className="division-label">LOTTO WORKSHOP</span>

            <h1>AI 로또 분석공방</h1>

            <p>
              LOTTO WORKSHOP은 AI 추천 엔진, 브리핑, 결과 검토,
              진화형 학습 구조를 기반으로 운영되는 GGUDDONG.STUDIO의
              첫 번째 공개 서비스입니다.
            </p>

            <div className="division-status-row">
              <span className="division-status online">ONLINE</span>
              <span>Service Operating</span>
            </div>

            <div className="division-actions">
              <a
                href="https://ai-lottogongbang.kr"
                target="_blank"
                rel="noreferrer"
                className="division-primary-link"
              >
                서비스 바로가기
              </a>

              <a href="/" className="division-secondary-link">
                메인으로 돌아가기
              </a>
            </div>
          </div>
        </section>

        <section className="division-section">
          <div className="container division-grid">
            <article className="division-info-card">
              <span>01</span>
              <h2>AI 추천 엔진</h2>
              <p>
                후보풀 생성, 압축, 최종 추천, 결과 평가로 이어지는
                주간 추천 흐름을 운영합니다.
              </p>
            </article>

            <article className="division-info-card">
              <span>02</span>
              <h2>AI 브리핑</h2>
              <p>
                추천 과정과 결과를 사용자가 이해할 수 있도록
                공방형 콘텐츠와 운영 기록으로 정리합니다.
              </p>
            </article>

            <article className="division-info-card">
              <span>03</span>
              <h2>진화형 운영</h2>
              <p>
                매주 결과를 검토하고 추천 흐름을 개선하는
                학습 기반 운영 구조를 준비하고 있습니다.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
      <SmartNavigation />
    </>
  );
}

export default LottoWorkshop;