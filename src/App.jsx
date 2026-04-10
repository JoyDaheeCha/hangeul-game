import { useState } from 'react'
import { useProgress } from './hooks/useProgress'
import * as W1 from './data/week1'
import * as W2 from './data/week2'
import HomeScreen   from './components/HomeScreen'
import LearnScreen  from './components/LearnScreen'
import GameAScreen  from './components/GameAScreen'
import GameBScreen  from './components/GameBScreen'
import ResultScreen from './components/ResultScreen'

const WEEK_DATA = {
  1: { chars: W1.CHARS, lessons: W1.LESSONS, wordQs: W1.WORD_QS },
  2: { chars: W2.CHARS, lessons: W2.LESSONS, wordQs: W2.WORD_QS },
}

export default function App() {
  const [week, setWeek] = useState(1)
  const data = WEEK_DATA[week]

  const { stars, totalStars, updateStars, loading } = useProgress(week, data.lessons.length)

  const [screen, setScreen]           = useState({ name: 'home' })
  const [currentLesson, setCurrentLesson] = useState(0)

  const goHome = () => setScreen({ name: 'home' })

  const handleWeekChange = (w) => {
    setWeek(w)
    setScreen({ name: 'home' })
  }

  const startLesson = (lessonIdx) => {
    const lesson = data.lessons[lessonIdx]
    setCurrentLesson(lessonIdx)
    if (lesson.type === 'learn')   setScreen({ name: 'learn' })
    if (lesson.type === 'game-a')  setScreen({ name: 'game-a', chars: lesson.chars })
    if (lesson.type === 'game-b')  setScreen({ name: 'game-b' })
  }

  const handleFinish = async (correct, total) => {
    const pct = Math.round(correct / total * 100)
    await updateStars(currentLesson, pct >= 80 ? 3 : pct >= 60 ? 2 : 1)
    setScreen({ name: 'result', correct, total })
  }

  const handleLearnComplete = async () => {
    await updateStars(currentLesson, 2)
    setScreen({ name: 'result', correct: data.chars.length, total: data.chars.length })
  }

  if (screen.name === 'home') {
    return (
      <HomeScreen
        week={week}
        onWeekChange={handleWeekChange}
        lessons={data.lessons}
        stars={stars}
        totalStars={totalStars}
        loading={loading}
        onStart={startLesson}
      />
    )
  }

  if (screen.name === 'learn') {
    return <LearnScreen chars={data.chars} onBack={goHome} onComplete={handleLearnComplete} />
  }

  if (screen.name === 'game-a') {
    return (
      <GameAScreen
        chars={data.chars}
        charIdxs={screen.chars}
        onBack={goHome}
        onFinish={handleFinish}
      />
    )
  }

  if (screen.name === 'game-b') {
    return <GameBScreen wordQs={data.wordQs} onBack={goHome} onFinish={handleFinish} />
  }

  if (screen.name === 'result') {
    return (
      <ResultScreen
        correct={screen.correct}
        total={screen.total}
        onRetry={() => startLesson(currentLesson)}
        onHome={goHome}
      />
    )
  }

  return null
}
