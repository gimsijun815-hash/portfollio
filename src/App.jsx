import { useEffect } from 'react'
import './App.css'

const interests = ['게임', '디지털 만들기']

function App() {
  useEffect(() => {
    document.title = '김치전 | 자기소개'
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <header className="site-header">
        <div className="header-inner site-width">
          <a className="wordmark" href="#home" aria-label="김치전 자기소개 홈">
            <span className="brand-mark" aria-hidden="true">K</span>
            <span>김치전<span className="brand-dot">.</span></span>
          </a>
          <nav aria-label="페이지 메뉴">
            <a href="#interests">관심사</a>
            <a href="#strengths">잘하는 것</a>
            <a href="#works">활동·작품</a>
            <a href="#goal">목표</a>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero-section site-width" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> MY INTRODUCTION</p>
            <h1 id="hero-title">문제를 풀며,<br />나만의 <span>프로그램과 게임을</span><br />만들어 가는 김치전</h1>
            <p className="hero-description">
              게임과 디지털 만들기에 관심이 있어요.<br />
              코딩을 배우며 작은 아이디어를 직접 만들어 보고 싶어요.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#about">나를 소개할게요 <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="#goal">앞으로의 목표 <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div className="workbench" aria-label="관심사와 목표 요약">
            <div className="workbench-top"><span /><span /><span /><p>MY WORKBENCH</p></div>
            <div className="workbench-content">
              <p className="workbench-label">A LITTLE ABOUT ME</p>
              <p className="workbench-title">관심을 아이디어로,<br />아이디어를 작품으로<span>.</span></p>
              <div className="workbench-flow" aria-hidden="true">
                <span>관심</span><i>→</i><span>도전</span><i>→</i><span>만들기</span>
              </div>
              <div className="workbench-footer"><span>게임 · 디지털 만들기</span><span>01 / 03</span></div>
            </div>
            <span className="workbench-sticker" aria-hidden="true">작은 시작<br />큰 아이디어</span>
          </div>
        </section>

        <section className="intro-section section-wrap" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2 id="about-title">안녕하세요,<br />김치전입니다<span>.</span></h2>
          </div>
          <div className="intro-copy">
            <p className="intro-lead">문제를 해결하는 것을 잘하고,<br />코딩을 더 배우고 싶어요.</p>
            <p className="body-copy">관심 있는 게임과 디지털 만들기를 더 알아 가며, 언젠가는 제가 직접 만든 작은 프로그램이나 게임을 소개하고 싶어요.</p>
          </div>
        </section>

        <section className="interests-section" id="interests" aria-labelledby="interests-title">
          <div className="section-wrap">
            <div className="section-title-row">
              <div>
                <p className="eyebrow">02 / THINGS I LIKE</p>
                <h2 id="interests-title">요즘 관심 있는 것<span>.</span></h2>
              </div>
              <p className="section-aside">좋아하는 분야에서<br />새로운 아이디어가 시작돼요.</p>
            </div>
            <div className="interest-grid">
              {interests.map((interest, index) => (
                <article className={`interest-card interest-card-${index + 1}`} key={interest}>
                  <span className="card-number">0{index + 1}</span>
                  <span className="interest-symbol" aria-hidden="true">{index === 0 ? '✳' : '＋'}</span>
                  <h3>{interest}</h3>
                  <p>{index === 0 ? '관심 있는 주제예요.' : '직접 만들고 탐구해 보고 싶은 분야예요.'}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="strengths" aria-labelledby="strengths-title">
          <div className="section-title-row">
            <div>
              <p className="eyebrow">03 / LEARN & GROW</p>
              <h2 id="strengths-title">잘하는 것, 배우고 싶은 것<span>.</span></h2>
            </div>
            <p className="section-aside">잘하는 점은 살리고,<br />새로운 것을 차근차근 배워요.</p>
          </div>
          <div className="skills-grid">
            <article className="skill-card">
              <span className="skill-label">MY STRENGTH</span>
              <span className="skill-icon" aria-hidden="true">◎</span>
              <h3>문제 해결</h3>
              <p>문제를 해결하는 것을 잘해요.</p>
            </article>
            <article className="skill-card skill-card-highlight">
              <span className="skill-label">NEXT TO LEARN</span>
              <span className="skill-icon" aria-hidden="true">&lt;/&gt;</span>
              <h3>코딩</h3>
              <p>코딩을 배워 직접 무언가를 만들어 보고 싶어요.</p>
            </article>
          </div>
        </section>

        <section className="works-section" id="works" aria-labelledby="works-title">
          <div className="section-wrap">
            <p className="eyebrow">04 / THINGS I HAVE TRIED</p>
            <h2 id="works-title">활동과 작품<span>.</span></h2>
            <div className="empty-work">
              <span className="empty-work-icon" aria-hidden="true">＋</span>
              <div>
                <h3>나중에 여기에 추가할게요</h3>
                <p>소개할 활동이나 작품이 생기면 설명과 사진을 이곳에 담을 수 있어요.</p>
              </div>
              <span className="empty-work-label">COMING LATER</span>
            </div>
          </div>
        </section>

        <section className="goal-section section-wrap" id="goal" aria-labelledby="goal-title">
          <div className="goal-card">
            <div>
              <p className="eyebrow">05 / MY NEXT GOAL</p>
              <h2 id="goal-title">작은 프로그램이나<br />게임을 직접 만들기<span>.</span></h2>
              <p className="goal-description">관심 있는 것을 하나씩 배우고, 내 손으로 만드는 경험을 쌓아 갈 거예요.</p>
            </div>
            <div className="goal-decoration" aria-hidden="true">
              <span className="goal-orbit orbit-one" />
              <span className="goal-orbit orbit-two" />
              <span className="goal-star">✳</span>
              <span className="goal-caption">IDEA<br />IN PROGRESS</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer site-width">
        <a className="wordmark" href="#home"><span className="brand-mark" aria-hidden="true">K</span><span>김치전<span className="brand-dot">.</span></span></a>
        <p>작은 아이디어를 하나씩 만들어 가는 중</p>
        <a className="back-top" href="#home">맨 위로 <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  )
}

export default App
