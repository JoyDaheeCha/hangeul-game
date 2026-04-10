import { useState } from 'react'
import { useSpeech } from '../hooks/useSpeech'

export default function LearnScreen({ chars, onBack, onComplete }) {
  const [idx, setIdx] = useState(0)
  const { speak } = useSpeech()
  const d = chars[idx]

  const handleNext = () => {
    if (idx < chars.length - 1) { setIdx(idx + 1); speak(chars[idx + 1].sound) }
    else onComplete()
  }
  const handlePrev = () => {
    if (idx > 0) { setIdx(idx - 1); speak(chars[idx - 1].sound) }
  }

  return (
    <div className="app">
      <div className="topbar">
        <button className="back-btn" onClick={onBack}>← 홈</button>
        <span className="topbar-title">{idx + 1} / {chars.length}</span>
        <span />
      </div>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:20, flex:1, gap:16 }}>
        <div style={{ display:'flex', gap:6 }}>
          {chars.map((_, i) => (
            <div key={i} style={{ width:8, height:8, borderRadius:'50%', background: i===idx ? '#534ab7' : '#d3d1c7', transition:'background 0.2s' }} />
          ))}
        </div>
        <div style={{ background:'#eeedfe', borderRadius:22, width:'100%', padding:'22px 20px', display:'flex', alignItems:'center', gap:16, border:'1px solid #afa9ec' }}>
          <div style={{ fontSize:72, color:'#3c3489', minWidth:80, textAlign:'center', lineHeight:1 }}>{d.c}</div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:17, fontWeight:600, color:'#534ab7', marginBottom:5 }}>"{d.sound}" 소리가 나요</div>
            <div style={{ fontSize:14, color:'#3c3489', marginBottom:2, display:'flex', alignItems:'center', gap:6 }}>
              {d.word}  {d.img ? <img src={d.img} alt={d.word} style={{ width:24, height:24 }} /> : d.emoji}
            </div>
            <div style={{ fontSize:11, color:'#7f77dd' }}>{d.ex}</div>
          </div>
        </div>
        <button className="listen-btn" onClick={() => speak(d.sound)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5L6 9H2v6h4l5 4V5z"/>
            <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/>
          </svg>
          소리 듣기
        </button>
        <div style={{ display:'flex', gap:10, width:'100%', marginTop:'auto' }}>
          <button onClick={handlePrev} disabled={idx===0}
            style={{ flex:1, background:'#f1efe8', border:'1px solid #d3d1c7', borderRadius:14, padding:13, fontSize:13, fontWeight:600, cursor:idx===0?'default':'pointer', color:'#5f5e5a', opacity:idx===0?0.3:1, fontFamily:'inherit' }}>
            ← 이전
          </button>
          <button onClick={handleNext}
            style={{ flex:1, background:'#534ab7', color:'#fff', border:'none', borderRadius:14, padding:13, fontSize:13, fontWeight:600, cursor:'pointer', fontFamily:'inherit' }}>
            {idx===chars.length-1 ? '완료 ✓' : '다음 →'}
          </button>
        </div>
      </div>
    </div>
  )
}
