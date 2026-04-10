import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../supabase'

const USER_ID = '예서'

function lsKey(week) { return `hangeul-w${week}-stars` }

function lsLoad(week, size) {
  try {
    const v = localStorage.getItem(lsKey(week))
    return v ? JSON.parse(v) : new Array(size).fill(0)
  } catch { return new Array(size).fill(0) }
}

function lsSave(week, stars) {
  try { localStorage.setItem(lsKey(week), JSON.stringify(stars)) } catch { }
}

async function sbLoad(week, size) {
  if (!supabase) return null
  try {
    const { data, error } = await supabase
      .from('progress')
      .select('lesson_id, stars')
      .eq('user_id', USER_ID)
      .eq('week', week)
    if (error || !data) return null
    const result = new Array(size).fill(0)
    data.forEach(row => {
      if (row.lesson_id >= 0 && row.lesson_id < size) result[row.lesson_id] = row.stars
    })
    return result
  } catch { return null }
}

async function sbSave(week, lessonId, starCount) {
  if (!supabase) return
  try {
    await supabase.from('progress').upsert({
      user_id: USER_ID, week, lesson_id: lessonId,
      stars: starCount, updated_at: new Date().toISOString(),
    })
  } catch { }
}

export function useProgress(week, lessonCount) {
  const [stars, setStars] = useState(() => lsLoad(week, lessonCount))
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setStars(lsLoad(week, lessonCount))
    setLoading(true)
    sbLoad(week, lessonCount).then(remote => {
      if (remote) { setStars(remote); lsSave(week, remote) }
      setLoading(false)
    })
  }, [week, lessonCount])

  const updateStars = useCallback(async (lessonId, newStarCount) => {
    setStars(prev => {
      if (newStarCount <= prev[lessonId]) return prev
      const next = [...prev]
      next[lessonId] = newStarCount
      lsSave(week, next)
      sbSave(week, lessonId, newStarCount)
      return next
    })
  }, [week])

  return { stars, totalStars: stars.reduce((a, b) => a + b, 0), updateStars, loading }
}
