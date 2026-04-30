import { useState } from 'react'
import { WEEK_META } from '../data/week1'

const OPTIONS = [
  { value: 2, label: '2장', cols: 1 },
  { value: 4, label: '4장', cols: 2 },
  { value: 6, label: '6장', cols: 2 },
]

const SIZES = {
  2: { emoji: 120, char: 108, sound: 22, word: 42, padV: 40, padH: 24, gap: 16 },
  4: { emoji: 86,  char: 76,  sound: 18, word: 32, padV: 28, padH: 18, gap: 14 },
  6: { emoji: 68,  char: 60,  sound: 15, word: 26, padV: 22, padH: 14, gap: 12 },
}

const SCALE_MIN = 0.5
const SCALE_MAX = 1.5
const SCALE_STEP = 0.1

function chunkArray(arr, size) {
  const result = []
  for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size))
  return result
}

function SegButton({ active, onClick, children, color = '#534ab7' }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '5px 11px',
        borderRadius: 8,
        border: `1.5px solid ${active ? color : '#d3d1c7'}`,
        background: active ? color : '#fff',
        color: active ? '#fff' : '#5f5e5a',
        fontSize: 12,
        fontWeight: 600,
        cursor: 'pointer',
        fontFamily: 'inherit',
        transition: 'all 0.15s',
      }}
    >
      {children}
    </button>
  )
}

function ScaleButton({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 26, height: 26,
        borderRadius: 6,
        border: '1.5px solid #d3d1c7',
        background: disabled ? '#f5f4f0' : '#fff',
        color: disabled ? '#c8c6be' : '#5f5e5a',
        fontSize: 15,
        fontWeight: 700,
        cursor: disabled ? 'default' : 'pointer',
        fontFamily: 'inherit',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        lineHeight: 1,
        padding: 0,
      }}
    >
      {children}
    </button>
  )
}

export default function PrintSheet({ week, chars, onBack }) {
  const meta = WEEK_META[week]
  const [cardsPerPage, setCardsPerPage] = useState(6)
  const [scale, setScale] = useState(1.0)

  const option = OPTIONS.find(o => o.value === cardsPerPage)
  const base = SIZES[cardsPerPage]
  const s = (n) => Math.round(n * scale)
  const sz = {
    emoji:   s(base.emoji),
    char:    s(base.char),
    sound:   s(base.sound),
    word:    s(base.word),
    cardPad: `${s(base.padV)}px ${s(base.padH)}px`,
    gap:     s(base.gap),
  }

  const pages = chunkArray(chars, cardsPerPage)

  const changeScale = (delta) => {
    setScale(prev => {
      const next = Math.round((prev + delta) * 10) / 10
      return Math.min(SCALE_MAX, Math.max(SCALE_MIN, next))
    })
  }

  return (
    <div className="print-page">
      <div className="print-controls no-print">
        <button className="back-btn" onClick={onBack} style={{ fontSize: 18, whiteSpace: 'nowrap' }}>
          ‹ 돌아가기
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 11, color: '#888780', fontWeight: 600 }}>페이지</span>
            {OPTIONS.map(opt => (
              <SegButton
                key={opt.value}
                active={cardsPerPage === opt.value}
                onClick={() => setCardsPerPage(opt.value)}
              >
                {opt.label}
              </SegButton>
            ))}
            <span style={{ fontSize: 11, color: '#b4b2a9', marginLeft: 2 }}>총 {pages.length}p</span>
          </div>

          <div style={{ width: 1, height: 18, background: '#e0ddd6' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 11, color: '#888780', fontWeight: 600 }}>크기</span>
            <ScaleButton onClick={() => changeScale(-SCALE_STEP)} disabled={scale <= SCALE_MIN}>−</ScaleButton>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#534ab7', minWidth: 38, textAlign: 'center' }}>
              {Math.round(scale * 100)}%
            </span>
            <ScaleButton onClick={() => changeScale(+SCALE_STEP)} disabled={scale >= SCALE_MAX}>+</ScaleButton>
          </div>
        </div>

        <button className="btn-print" onClick={() => window.print()}>🖨️ 인쇄</button>
      </div>

      <div className="print-preview">
        {pages.map((pageChars, pageIdx) => (
          <div key={pageIdx} className="print-sheet">
            <div className="print-sheet-header" style={{ borderColor: meta.color }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: meta.color }}>
                {meta.title} 단어 카드
                {pages.length > 1 && (
                  <span style={{ fontSize: 15, fontWeight: 600, marginLeft: 10, color: `${meta.color}99` }}>
                    {pageIdx + 1} / {pages.length}
                  </span>
                )}
              </div>
              <div style={{ fontSize: 14, color: '#5f5e5a', marginTop: 5 }}>{meta.sub}</div>
            </div>

            <div
              className="print-grid"
              style={{ gridTemplateColumns: `repeat(${option.cols}, 1fr)`, gap: sz.gap }}
            >
              {pageChars.map(char => (
                <div
                  key={char.c}
                  className="print-card"
                  style={{ borderColor: meta.color, background: meta.bg, padding: sz.cardPad }}
                >
                  <div style={{ fontSize: sz.emoji, lineHeight: 1.1 }}>{char.emoji}</div>
                  <div style={{ fontSize: sz.char, fontWeight: 900, lineHeight: 1, color: meta.color }}>{char.c}</div>
                  <div
                    className="print-sound"
                    style={{ background: `${meta.color}18`, color: meta.color, fontSize: sz.sound }}
                  >
                    [{char.sound}]
                  </div>
                  <div style={{ fontSize: sz.word, fontWeight: 700, color: '#2c2c2a' }}>{char.word}</div>
                </div>
              ))}
            </div>

            <div className="print-footer">
              예서의 한글 · {meta.title} · {meta.sub}
              {pages.length > 1 && ` · ${pageIdx + 1}/${pages.length}페이지`}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
