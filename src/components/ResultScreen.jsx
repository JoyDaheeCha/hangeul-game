export default function ResultScreen({ correct, total, onRetry, onHome }) {
  const pct = Math.round(correct / total * 100)
  const sc  = pct >= 80 ? 3 : pct >= 60 ? 2 : 1
  const emoji = pct >= 80 ? '🎉' : pct >= 50 ? '😊' : '💪'
  const title = pct >= 80 ? '정말 잘했어요!' : pct >= 50 ? '잘 하고 있어요!' : '계속 도전해봐요!'
  const sub   = pct >= 80 ? '스티커를 받았어요!' : pct >= 50 ? '조금 더 연습하면 완벽해요!' : '다시 해보면 더 잘할 수 있어요!'

  return (
    <div className="app">
      <div className="topbar"><span className="topbar-title">오늘의 결과</span></div>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', flex:1, padding:'28px 24px', gap:14, textAlign:'center' }}>
        <div style={{ fontSize:64 }}>{emoji}</div>
        <div style={{ fontSize:20, fontWeight:600, color:'#2c2c2a' }}>{title}</div>
        <div style={{ fontSize:13, color:'#888780' }}>{sub}</div>
        <div style={{ display:'flex', gap:8, justifyContent:'center' }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ width:44, height:44, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, background:i<=sc?'#faeeda':'#f1efe8', border:`2px solid ${i<=sc?'#ef9f27':'#d3d1c7'}` }}>
              {i<=sc?'⭐':''}
            </div>
          ))}
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8, width:'100%' }}>
          {[['맞힌 문제',correct],['전체 문제',total],['정확도',`${pct}%`]].map(([label,value]) => (
            <div key={label} style={{ background:'#f9f8f5', borderRadius:12, padding:'12px 8px', textAlign:'center', border:'1px solid #e8e5de' }}>
              <div style={{ fontSize:22, fontWeight:600, color:'#534ab7' }}>{value}</div>
              <div style={{ fontSize:10, color:'#888780', marginTop:2 }}>{label}</div>
            </div>
          ))}
        </div>
        <button className="btn-primary" onClick={onRetry}>다시 도전하기</button>
        <button className="btn-secondary" onClick={onHome}>홈으로</button>
      </div>
    </div>
  )
}
