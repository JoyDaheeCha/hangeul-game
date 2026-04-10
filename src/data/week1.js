export const WEEK_META = {
  1: { title: '1주차', sub: 'ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ', color: '#534ab7', bg: '#eeedfe' },
  2: { title: '2주차', sub: 'ㅅ + ㅏ ㅓ ㅗ ㅜ 모음', color: '#0f6e56', bg: '#e1f5ee' },
}

export const CHARS = [
  { c: 'ㄱ', sound: '그', word: '고양이', emoji: '🐱', ex: 'ㄱ → 고양이에서 나는 소리' },
  { c: 'ㄴ', sound: '느', word: '나비',   emoji: '🦋', ex: 'ㄴ → 나비에서 나는 소리' },
  { c: 'ㄷ', sound: '드', word: '다리',   emoji: '🌉', ex: 'ㄷ → 다리에서 나는 소리' },
  { c: 'ㄹ', sound: '르', word: '라면',   emoji: '🍜', ex: 'ㄹ → 라면에서 나는 소리' },
  { c: 'ㅁ', sound: '므', word: '모자',   emoji: '🎩', ex: 'ㅁ → 모자에서 나는 소리' },
  { c: 'ㅂ', sound: '브', word: '바나나', emoji: '🍌', ex: 'ㅂ → 바나나에서 나는 소리' },
]

export const LESSONS = [
  { id: 0, title: '자음 배우기',      sub: 'ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ 소리 먼저 익혀요', icon: '📖', bg: '#eeedfe', type: 'learn',  chars: null },
  { id: 1, title: '소리 맞히기 1',    sub: 'ㄱ ㄴ ㄷ — 소리를 골라봐요',          icon: '🎯', bg: '#e1f5ee', type: 'game-a', chars: [0,1,2] },
  { id: 2, title: '소리 맞히기 2',    sub: 'ㄹ ㅁ ㅂ — 소리를 골라봐요',          icon: '🎮', bg: '#faeeda', type: 'game-a', chars: [3,4,5] },
  { id: 3, title: '그림 단어 맞히기', sub: '그림 보고 단어를 골라봐요',             icon: '🖼️', bg: '#faece7', type: 'game-b', chars: null },
  { id: 4, title: '전체 혼합 도전',   sub: '6개 자음 모두 섞어서 도전!',           icon: '⚡', bg: '#f1efe8', type: 'game-a', chars: [0,1,2,3,4,5] },
]

export const WORD_QS = [
  { emoji: '🐱', correct: '고양이', wrong: ['나비', '다리', '라면'] },
  { emoji: '🦋', correct: '나비',   wrong: ['고양이', '모자', '바나나'] },
  { emoji: '🍜', correct: '라면',   wrong: ['다리', '나비', '모자'] },
  { emoji: '🎩', correct: '모자',   wrong: ['라면', '바나나', '고양이'] },
  { emoji: '🍌', correct: '바나나', wrong: ['모자', '나비', '다리'] },
  { emoji: '🌉', correct: '다리',   wrong: ['바나나', '라면', '고양이'] },
]
