import { WEEK_META } from '../data/week1'

const WEEKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const STAGES = [
  { name: '1단계 — 자모 소리 자동화', weeks: [1, 2, 3, 4] },
  { name: '2단계 — 받침 없는 글자 조합', weeks: [5, 6, 7, 8] },
  { name: '3단계 — 받침 있는 글자', weeks: [9, 10, 11, 12] },
]

function getWeekStars(weekNum, userId) {
  try {
    const v = localStorage.getItem(`hangeul-${userId}-w${weekNum}-stars`)
    if (!v) return 0
    return JSON.parse(v).reduce((a, b) => a + b, 0)
  } catch { return 0 }
}

export default function HomeScreen({ week, onWeekChange, onBackToWeeks, lessons, stars, totalStars, loading, onStart, onPrint, userId = 'guest', displayName, onLogout }) {
  if (!week) {
    const allStars = WEEKS.reduce((sum, w) => sum + getWeekStars(w, userId), 0)

    return (
      <div className="app">
        <div className="topbar">
          <span className="topbar-title">예서의 한글</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {displayName && (
              <span style={{ fontSize: 12, color: '#5f5e5a', fontWeight: 600 }}>
                {displayName.split(' ')[0]}
              </span>
            )}
            {onLogout && (
              <button
                onClick={onLogout}
                style={{
                  fontSize: 11, color: '#888780', background: 'none', border: '1px solid #d3d1c7',
                  borderRadius: 8, padding: '3px 8px', cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                로그아웃
              </button>
            )}
            <div className="star-badge">⭐ {allStars}</div>
          </div>
        </div>

        <div style={{ padding: '16px 20px 20px', flex: 1, overflowY: 'auto' }}>
          {STAGES.map(stage => (
            <div key={stage.name} style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#888780', marginBottom: 8, paddingLeft: 4 }}>
                {stage.name}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {stage.weeks.map(w => {
                  const m = WEEK_META[w]
                  const weekStarCount = getWeekStars(w, userId)
                  return (
                    <div
                      key={w}
                      onClick={() => onWeekChange(w)}
                      style={{
                        background: m.bg, border: `1px solid ${m.color}22`,
                        borderRadius: 16, padding: '13px 15px',
                        display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
                      }}
                    >
                      <div style={{
                        width: 44, height: 44, borderRadius: 12,
                        background: `${m.color}18`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 22, fontWeight: 700, color: m.color, flexShrink: 0,
                      }}>
                        {m.displayChar}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 14, fontWeight: 600, color: '#2c2c2a', marginBottom: 2 }}>{m.title}</div>
                        <div style={{ fontSize: 11, color: '#888780' }}>{m.sub}</div>
                      </div>
                      {weekStarCount > 0
                        ? <div style={{ fontSize: 12, color: m.color, fontWeight: 600 }}>⭐ {weekStarCount}</div>
                        : <div style={{ fontSize: 18, color: '#b4b2a9' }}>›</div>
                      }
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const meta = WEEK_META[week]

  return (
    <div className="app">
      <div className="topbar">
        <button className="back-btn" onClick={onBackToWeeks} style={{ fontSize: 18, padding: '0 8px 0 0' }}>‹</button>
        <span className="topbar-title" style={{ flex: 1 }}>{meta.title} — {meta.sub}</span>
        <button
          onClick={onPrint}
          title="단어 카드 인쇄"
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, padding: '0 6px', lineHeight: 1 }}
        >🖨️</button>
        <div className="star-badge">⭐ {loading ? '...' : totalStars}</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 20px 20px', gap: 14, flex: 1 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 64, color: meta.color, lineHeight: 1, marginBottom: 6 }}>
            {meta.displayChar}
          </div>
          <div style={{ fontSize: 15, fontWeight: 600, color: '#2c2c2a', marginBottom: 2 }}>
            {meta.desc}
          </div>
        </div>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {lessons.map((lesson, i) => {
            const done   = stars[i] > 0
            const locked = i > 0 && stars[i - 1] === 0

            return (
              <div
                key={lesson.id}
                onClick={() => !locked && onStart(i)}
                style={{
                  background: '#f9f8f5', border: '1px solid #e8e5de',
                  borderRadius: 16, padding: '13px 15px',
                  display: 'flex', alignItems: 'center', gap: 12,
                  cursor: locked ? 'default' : 'pointer',
                  opacity: locked ? 0.45 : 1, transition: 'background 0.12s',
                }}
              >
                <div style={{ width: 42, height: 42, borderRadius: 12, background: lesson.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                  {lesson.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#2c2c2a', marginBottom: 2 }}>{lesson.title}</div>
                  <div style={{ fontSize: 11, color: '#888780' }}>{lesson.sub}</div>
                </div>
                {done
                  ? <div style={{ fontSize: 12, color: '#1d9e75', fontWeight: 600 }}>★{stars[i]}/3</div>
                  : <div style={{ fontSize: 18, color: '#b4b2a9' }}>›</div>
                }
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
