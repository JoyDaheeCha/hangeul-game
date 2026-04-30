import { useState } from 'react'
import { WEEK_META } from '../data/week1'

const OPTIONS = [
  { value: 2, label: '2장', cols: 1 },
  { value: 4, label: '4장', cols: 2 },
  { value: 6, label: '6장', cols: 2 },
]

const SIZES = {
  2: { emoji: 120, char: 108, sound: 22, word: 42, cardPad: '40px 24px', gap: 16 },
  4: { emoji: 86,  char: 76,  sound: 18, word: 32, cardPad: '28px 18px', gap: 14 },
  6: { emoji: 68,  char: 60,  sound: 15, word: 26, cardPad: '22px 14px', gap: 12 },
}

function chunkArray(arr, size) {
  const result = []
  for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size))
  return result
}

export default function PrintSheet({ week, chars, onBack }) {
  const meta = WEEK_META[week]
  const [cardsPerPage, setCardsPerPage] = useState(6)

  const option = OPTIONS.find(o => o.value === cardsPerPage)
  const sz = SIZES[cardsPerPage]
  const pages = chunkArray(chars, cardsPerPage)

  return (
    <div className="print-page">
      <div className="print-controls no-print">
        <button className="back-btn" onClick={onBack} style={{ fontSize: 18 }}>‹ 돌아가기</button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: '#888780', fontWeight: 600 }}>한 페이지에</span>
          {OPTIONS.map(opt => (
            <button
              key={opt.value}
              onClick={() => setCardsPerPage(opt.value)}
              style={{
                padding: '5px 12px',
                borderRadius: 8,
                border: `1.5px solid ${cardsPerPage === opt.value ? '#534ab7' : '#d3d1c7'}`,
                background: cardsPerPage === opt.value ? '#534ab7' : '#fff',
                color: cardsPerPage === opt.value ? '#fff' : '#5f5e5a',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.15s',
              }}
            >
              {opt.label}
            </button>
          ))}
          <span style={{ fontSize: 12, color: '#b4b2a9' }}>총 {pages.length}페이지</span>
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
