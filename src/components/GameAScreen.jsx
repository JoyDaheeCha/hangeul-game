import { useState, useEffect, useCallback } from 'react'
import { useSpeech } from '../hooks/useSpeech'

function shuffle(arr) {
  const r = [...arr]
  for (let i = r.length-1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]] }
  return r
}

export default function GameAScreen({ chars, charIdxs, onBack, onFinish }) {
  const { speak } = useSpeech()
  const allChars = chars
  const [queue]   = useState(() => shuffle(charIdxs || allChars.map((_,i)=>i)))
  const [qIdx, setQIdx]         = useState(0)
  const [score, setScore]       = useState(0)
  const [answered, setAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(null)
  const [choices, setChoices]   = useState([])
  const [selected, setSelected] = useState(null)
  const [feedback, setFeedback] = useState('')
  const [hintWord, setHintWord] = useState('')

  const d = allChars[queue[qIdx]]
  const total = queue.length
  const pct = Math.round(qIdx / total * 100)

  const resetQuestion = useCallback(() => {
    const correct = allChars[queue[qIdx]].sound
    const pool = allChars.filter(x => x.sound !== correct).map(x => x.sound)
    // 보기가 4개 미만이면 다른 주차 소리로 채우기
    const extras = ['가','나','다','라','마','바','사','아','오','우'].filter(s => s !== correct && !pool.includes(s))
    const combined = [...pool, ...extras]
    setChoices(shuffle([correct, ...shuffle(combined).slice(0,3)]))
    setAnswered(false); setIsCorrect(null); setSelected(null); setFeedback(''); setHintWord('')
  }, [qIdx, queue, allChars])

  useEffect(() => { resetQuestion() }, [qIdx])

  const handleAnswer = useCallback((chosen) => {
    if (answered) return
    setAnswered(true); setSelected(chosen)
    const correct = d.sound
    const ok = chosen === correct
    setIsCorrect(ok)
    if (ok) {
      setScore(s => s + 1)
      speak(correct)
      if (qIdx + 1 >= total) onFinish(score + 1, total)
      else setQIdx(i => i + 1)
    } else {
      setFeedback('아쉬워요! 다시 해볼까요?')
      setHintWord(`힌트: ${d.word}  ${d.emoji}`)
      speak(correct)
    }
  }, [answered, d, score, qIdx, total, onFinish])

  const getStyle = (c) => {
    if (!answered) return { background:'#fff', borderColor:'#d3d1c7', color:'#2c2c2a' }
    if (c === d.sound) return { background:'#e1f5ee', borderColor:'#1d9e75', color:'#0f6e56' }
    if (c === selected && c !== d.sound) return { background:'#fcebeb', borderColor:'#e24b4a', color:'#a32d2d' }
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
        <div style={{ fontSize:12, color:'#888780' }}>이 글자의 소리는 무엇일까요?</div>
        <div style={{ background:'#eeedfe', borderRadius:24, width:158, height:158, display:'flex', alignItems:'center', justifyContent:'center', border:'2px solid #afa9ec' }}>
          <div style={{ fontSize:88, color:'#3c3489', lineHeight:1 }}>{d.c}</div>
        </div>
        <button className="listen-btn" onClick={() => speak(d.sound)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/></svg>
          소리 듣기
        </button>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, width:'100%' }}>
          {choices.map(c => (
            <button key={c} onClick={() => handleAnswer(c)} disabled={answered}
              style={{ border:'2px solid', borderRadius:14, fontSize:28, fontWeight:600, height:66, display:'flex', alignItems:'center', justifyContent:'center', cursor:answered?'default':'pointer', fontFamily:'inherit', transition:'background 0.1s, border-color 0.1s', ...getStyle(c) }}>
              {c}
            </button>
          ))}
        </div>
        <div className={`feedback ${isCorrect===true?'ok':isCorrect===false?'no':''}`}>{feedback}</div>
        <div className="hint-word">{hintWord}</div>
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
