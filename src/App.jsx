import { useState } from 'react'
import { useProgress } from './hooks/useProgress'
import * as W1 from './data/week1'
import * as W2 from './data/week2'
import * as W3 from './data/week3'
import * as W4 from './data/week4'
import * as W5 from './data/week5'
import * as W6 from './data/week6'
import * as W7 from './data/week7'
import * as W8 from './data/week8'
import * as W9 from './data/week9'
import * as W10 from './data/week10'
import * as W11 from './data/week11'
import * as W12 from './data/week12'
import HomeScreen   from './components/HomeScreen'
import LearnScreen  from './components/LearnScreen'
import GameAScreen  from './components/GameAScreen'
import GameBScreen  from './components/GameBScreen'
import ResultScreen from './components/ResultScreen'

const WEEK_DATA = {
  1:  { chars: W1.CHARS,  lessons: W1.LESSONS,  wordQs: W1.WORD_QS },
  2:  { chars: W2.CHARS,  lessons: W2.LESSONS,  wordQs: W2.WORD_QS },
  3:  { chars: W3.CHARS,  lessons: W3.LESSONS,  wordQs: W3.WORD_QS },
  4:  { chars: W4.CHARS,  lessons: W4.LESSONS,  wordQs: W4.WORD_QS },
  5:  { chars: W5.CHARS,  lessons: W5.LESSONS,  wordQs: W5.WORD_QS },
  6:  { chars: W6.CHARS,  lessons: W6.LESSONS,  wordQs: W6.WORD_QS },
  7:  { chars: W7.CHARS,  lessons: W7.LESSONS,  wordQs: W7.WORD_QS },
  8:  { chars: W8.CHARS,  lessons: W8.LESSONS,  wordQs: W8.WORD_QS },
  9:  { chars: W9.CHARS,  lessons: W9.LESSONS,  wordQs: W9.WORD_QS },
  10: { chars: W10.CHARS, lessons: W10.LESSONS, wordQs: W10.WORD_QS },
  11: { chars: W11.CHARS, lessons: W11.LESSONS, wordQs: W11.WORD_QS },
  12: { chars: W12.CHARS, lessons: W12.LESSONS, wordQs: W12.WORD_QS },
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
