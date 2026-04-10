import { WEEK_META } from '../data/week1'

const WEEKS = [1, 2, 3]

export default function HomeScreen({ week, onWeekChange, lessons, stars, totalStars, loading, onStart }) {
  const meta = WEEK_META[week]

  return (
    <div className="app">
      {/* 상단바 */}
      <div className="topbar">
        <span className="topbar-title">예서의 한글</span>
        <div className="star-badge">⭐ {loading ? '...' : totalStars}</div>
      </div>

      {/* 주차 탭 */}
      <div style={{ display: 'flex', padding: '10px 16px 0', gap: 8, borderBottom: '1px solid #f0ede8' }}>
        {WEEKS.map(w => {
          const m = WEEK_META[w]
          const active = w === week
          return (
            <button
              key={w}
              onClick={() => onWeekChange(w)}
              style={{
                flex: 1,
                padding: '9px 0 10px',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                border: 'none',
                borderBottom: active ? `2.5px solid ${m.color}` : '2.5px solid transparent',
                background: 'none',
                color: active ? m.color : '#b4b2a9',
                fontFamily: 'inherit',
                transition: 'color 0.15s',
              }}
            >
              {m.title}
              <div style={{ fontSize: 10, fontWeight: 400, color: active ? m.color : '#d3d1c7', marginTop: 1 }}>
                {m.sub}
              </div>
            </button>
          )
        })}
      </div>

      {/* 레슨 목록 */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 20px 20px', gap: 14, flex: 1 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 64, color: meta.color, lineHeight: 1, marginBottom: 6 }}>
            {meta.displayChar}
          </div>
          <div style={{ fontSize: 17, fontWeight: 600, color: '#2c2c2a', marginBottom: 2 }}>
            {meta.title} — {meta.sub}
          </div>
          <div style={{ fontSize: 12, color: '#888780' }}>{meta.desc}</div>
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
                  background: '#f9f8f5',
                  border: '1px solid #e8e5de',
                  borderRadius: 16,
                  padding: '13px 15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  cursor: locked ? 'default' : 'pointer',
                  opacity: locked ? 0.45 : 1,
                  transition: 'background 0.12s',
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
