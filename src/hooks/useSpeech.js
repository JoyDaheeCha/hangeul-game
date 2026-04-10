import { useCallback } from 'react'

export function useSpeech() {
  const speak = useCallback((text) => {
    if (!window.speechSynthesis) return
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'ko-KR'
    u.rate = 0.8
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(u)
  }, [])
  return { speak }
}
