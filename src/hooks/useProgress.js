import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../supabase'

function lsKey(userId, week) { return `hangeul-${userId}-w${week}-stars` }

function lsLoad(userId, week, size) {
  try {
    const v = localStorage.getItem(lsKey(userId, week))
    return v ? JSON.parse(v) : new Array(size).fill(0)
  } catch { return new Array(size).fill(0) }
}

function lsSave(userId, week, stars) {
  try { localStorage.setItem(lsKey(userId, week), JSON.stringify(stars)) } catch { }
}

async function sbLoad(userId, week, size) {
  if (!supabase) return null
  try {
    const { data, error } = await supabase
      .from('progress')
      .select('lesson_id, stars')
      .eq('user_id', userId)
      .eq('week', week)
    if (error || !data) return null
    const result = new Array(size).fill(0)
    data.forEach(row => {
      if (row.lesson_id >= 0 && row.lesson_id < size) result[row.lesson_id] = row.stars
    })
    return result
  } catch { return null }
}

async function sbSave(userId, week, lessonId, starCount) {
  if (!supabase) return
  try {
    await supabase.from('progress').upsert({
      user_id: userId, week, lesson_id: lessonId,
      stars: starCount, updated_at: new Date().toISOString(),
    })
  } catch { }
}

export function useProgress(week, lessonCount, userId = 'guest') {
  const [stars, setStars] = useState(() => lsLoad(userId, week, lessonCount))
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setStars(lsLoad(userId, week, lessonCount))
    setLoading(true)
    sbLoad(userId, week, lessonCount).then(remote => {
      if (remote) { setStars(remote); lsSave(userId, week, remote) }
      setLoading(false)
    })
  }, [week, lessonCount, userId])

  const updateStars = useCallback(async (lessonId, newStarCount) => {
    setStars(prev => {
      if (newStarCount <= prev[lessonId]) return prev
      const next = [...prev]
      next[lessonId] = newStarCount
      lsSave(userId, week, next)
      sbSave(userId, week, lessonId, newStarCount)
      return next
    })
  }, [week, userId])

  return { stars, totalStars: stars.reduce((a, b) => a + b, 0), updateStars, loading }
}
