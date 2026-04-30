import { STAGES, usePet } from '../hooks/usePet'

const STAGE_COLORS = [
  { bg: '#fef9ee', accent: '#d97706' },
  { bg: '#fce7f3', accent: '#be185d' },
  { bg: '#e0f2fe', accent: '#0369a1' },
  { bg: '#d1fae5', accent: '#047857' },
]

function getMood(hunger) {
  if (hunger >= 75) return { emoji: '😊', msg: '배불러요~ 행복해요!' }
  if (hunger >= 50) return { emoji: '🙂', msg: '괜찮아요!' }
  if (hunger >= 25) return { emoji: '😕', msg: '조금 배고파요...' }
  return { emoji: '😢', msg: '배고파요! 밥 주세요~' }
}

function HungerBar({ hunger }) {
  const filled = Math.round((hunger / 100) * 5)
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'center', margin: '10px 0' }}>
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          style={{
            width: 20, height: 20, borderRadius: '50%',
            background: i < filled ? '#ef4444' : '#e5e7eb',
          }}
        />
      ))}
    </div>
  )
}

export default function TamagotchiScreen({ userId, onBack }) {
  const { pet, availableStars, stageIdx, stage, feed, play, animating } = usePet(userId)
  const colors = STAGE_COLORS[stageIdx]
  const mood = getMood(pet.hunger)
  const nextStars = stage.nextStars
  const starsToNext = nextStars ? Math.max(0, nextStars - (availableStars + (pet.totalStarSpent ?? 0))) : 0

  const feedDisabled = availableStars < 1 || pet.hunger >= 95
  const playDisabled = availableStars < 2

  return (
    <div className="app">
      <div className="topbar">
        <button className="back-btn" onClick={onBack}>‹ 돌아가기</button>
        <span className="topbar-title">내 다마고치</span>
        <div className="star-badge">⭐ {availableStars}</div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '24px 20px 20px', gap: 16 }}>
        <div style={{
          background: colors.bg, borderRadius: 24, padding: '28px 20px 20px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}>
          <div style={{ fontSize: 32 }}>{mood.emoji}</div>
          <div
            className={animating ? 'bounce' : ''}
            style={{ fontSize: 120, lineHeight: 1, userSelect: 'none' }}
          >
            {stage.emoji}
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: colors.accent }}>{mood.msg}</div>

          <HungerBar hunger={pet.hunger} />

          <div style={{
            fontSize: 13, fontWeight: 700, color: colors.accent,
            background: `${colors.accent}18`, borderRadius: 20, padding: '4px 14px', marginTop: 4,
          }}>
            {stageIdx + 1}단계 · {stage.name}
          </div>

          <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>
            {nextStars
              ? `다음 단계까지 ${starsToNext}별 남았어요!`
              : '최고 단계예요! 🎉'}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <button
            className="btn-primary"
            onClick={feed}
            disabled={feedDisabled}
            style={{ opacity: feedDisabled ? 0.4 : 1 }}
          >
            🍚 밥 주기 &nbsp;⭐ 1
          </button>
          <button
            className="btn-secondary"
            onClick={play}
            disabled={playDisabled}
            style={{ opacity: playDisabled ? 0.4 : 1 }}
          >
            🎮 놀아주기 &nbsp;⭐ 2
          </button>
        </div>

        <div style={{ textAlign: 'center', fontSize: 12, color: '#9ca3af', marginTop: 4 }}>
          수업을 더 하면 별이 쌓여요! ✨
        </div>
      </div>
    </div>
  )
}
