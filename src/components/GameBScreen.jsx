import { useState, useEffect, useCallback } from 'react'
import { useSpeech } from '../hooks/useSpeech'

function shuffle(arr) {
  const r = [...arr]
  for (let i = r.length-1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]] }
  return r
}

export default function GameBScreen({ wordQs, onBack, onFinish }) {
  const { speak } = useSpeech()
  const [queue]   = useState(() => shuffle([...wordQs]))
  const [qIdx, setQIdx]         = useState(0)
  const [score, setScore]       = useState(0)
  const [answered, setAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(null)
  const [choices, setChoices]   = useState([])
  const [selected, setSelected] = useState(null)
  const [feedback, setFeedback] = useState('')

  const q = queue[qIdx]
  const total = queue.length
  const pct = Math.round(qIdx / total * 100)

  const resetQuestion = useCallback(() => {
    setChoices(shuffle([queue[qIdx].correct, ...queue[qIdx].wrong]))
    setAnswered(false); setIsCorrect(null); setSelected(null); setFeedback('')
  }, [qIdx, queue])

  useEffect(() => { resetQuestion() }, [qIdx])

  const handleAnswer = useCallback((chosen) => {
    if (answered) return
    setAnswered(true); setSelected(chosen)
    const ok = chosen === q.correct
    setIsCorrect(ok)
    if (ok) {
      setScore(s => s + 1)
      speak(q.correct)
      if (qIdx + 1 >= total) onFinish(score + 1, total)
      else setQIdx(i => i + 1)
    } else {
      setFeedback(`아쉬워요! 정답은 "${q.correct}"이에요`)
      speak(q.correct)
    }
  }, [answered, q, score, qIdx, total, onFinish])

  const getStyle = (c) => {
    if (!answered) return { background:'#fff', borderColor:'#d3d1c7', color:'#2c2c2a' }
    if (c === q.correct) return { background:'#e1f5ee', borderColor:'#1d9e75', color:'#0f6e56' }
    if (c === selected && c !== q.correct) return { background:'#fcebeb', borderColor:'#e24b4a', color:'#a32d2d' }
    return { background:'#fff', borderColor:'#d3d1c7', color:'#2c2c2a', opacity:0.4 }
  }

  return (
    <div className="app">
      <div className="topbar">
        <button className="back-btn" onClick={onBack}>← 홈</button>
        <div className="progress-wrap"><div className="progress-bar" style={{ width:`${pct}%` }} /></div>
        <div className="star-badge">⭐ {score}</div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:'14px 20px 20px', flex:1, gap:10 }}>
        <div style={{ fontSize:12, color:'#888780' }}>이 그림의 이름은 무엇일까요?</div>
        <div style={{ width:130, height:130, borderRadius:22, display:'flex', alignItems:'center', justifyContent:'center', fontSize:60, background:'#f9f8f5', border:'1px solid #e0ddd6' }}>
          {q.emoji}
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:8, width:'100%' }}>
          {choices.map(c => (
            <button key={c} onClick={() => handleAnswer(c)} disabled={answered}
              style={{ border:'2px solid', borderRadius:14, padding:'13px 16px', fontSize:16, fontWeight:600, cursor:answered?'default':'pointer', textAlign:'left', fontFamily:'inherit', transition:'background 0.1s, border-color 0.1s', ...getStyle(c) }}>
              {c}
            </button>
          ))}
        </div>
        <div className={`feedback ${isCorrect===true?'ok':isCorrect===false?'no':''}`}>{feedback}</div>
        {answered && isCorrect===false && (
          <button onClick={resetQuestion}
            style={{ background:'#534ab7', color:'#fff', border:'none', borderRadius:14, padding:'13px 0', fontSize:15, fontWeight:600, cursor:'pointer', width:'100%', fontFamily:'inherit', marginTop:4 }}>
            다시 해볼까요? 🔄
          </button>
        )}
      </div>
    </div>
  )
}
