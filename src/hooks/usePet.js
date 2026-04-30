import { useState, useCallback } from 'react'

export const STAGES = [
  { name: '알',    emoji: '🥚', minStars: 0,  nextStars: 15 },
  { name: '아기',  emoji: '🐣', minStars: 15, nextStars: 45 },
  { name: '어린이', emoji: '🐥', minStars: 45, nextStars: 90 },
  { name: '어른',  emoji: '🐔', minStars: 90, nextStars: null },
]

const PET_KEY = (userId) => `hangeul-${userId}-pet`
const HUNGER_DECAY_PER_DAY = 15

export function getTotalStarsEarned(userId) {
  let total = 0
  for (let w = 1; w <= 12; w++) {
    try {
      const v = localStorage.getItem(`hangeul-${userId}-w${w}-stars`)
      if (v) total += JSON.parse(v).reduce((a, b) => a + b, 0)
    } catch { }
  }
  return total
}

export function loadPetState(userId) {
  try {
    const raw = localStorage.getItem(PET_KEY(userId))
    const saved = raw ? JSON.parse(raw) : { hunger: 50, lastUpdatedAt: Date.now(), totalStarSpent: 0 }
    const now = Date.now()
    const elapsedDays = (now - (saved.lastUpdatedAt ?? now)) / (1000 * 60 * 60 * 24)
    const decayed = Math.max(0, saved.hunger - elapsedDays * HUNGER_DECAY_PER_DAY)
    return { ...saved, hunger: decayed, lastUpdatedAt: now }
  } catch {
    return { hunger: 50, lastUpdatedAt: Date.now(), totalStarSpent: 0 }
  }
}

export function getStageIndex(totalEarned) {
  let idx = 0
  for (let i = STAGES.length - 1; i >= 0; i--) {
    if (totalEarned >= STAGES[i].minStars) { idx = i; break }
  }
  return idx
}

function savePetState(userId, pet) {
  try { localStorage.setItem(PET_KEY(userId), JSON.stringify(pet)) } catch { }
}

export function usePet(userId = 'guest') {
  const [pet, setPet] = useState(() => loadPetState(userId))
  const [animating, setAnimating] = useState(false)

  const totalEarned = getTotalStarsEarned(userId)
  const stageIdx = getStageIndex(totalEarned)
  const stage = STAGES[stageIdx]
  const availableStars = totalEarned - (pet.totalStarSpent ?? 0)

  const triggerAnim = () => {
    setAnimating(true)
    setTimeout(() => setAnimating(false), 300)
  }

  const feed = useCallback(() => {
    if (availableStars < 1) return
    setPet(prev => {
      const next = {
        ...prev,
        hunger: Math.min(100, prev.hunger + 25),
        totalStarSpent: (prev.totalStarSpent ?? 0) + 1,
        lastUpdatedAt: Date.now(),
      }
      savePetState(userId, next)
      return next
    })
    triggerAnim()
  }, [availableStars, userId])

  const play = useCallback(() => {
    if (availableStars < 2) return
    setPet(prev => {
      const next = {
        ...prev,
        hunger: Math.min(100, prev.hunger + 15),
        totalStarSpent: (prev.totalStarSpent ?? 0) + 2,
        lastUpdatedAt: Date.now(),
      }
      savePetState(userId, next)
      return next
    })
    triggerAnim()
  }, [availableStars, userId])

  return { pet, availableStars, totalEarned, stageIdx, stage, feed, play, animating }
}
