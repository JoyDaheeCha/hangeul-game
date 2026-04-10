export const CHARS = [
  { c: '야', sound: '야', word: '야구',  emoji: '⚾', ex: 'ㅑ → 야구에서 나는 소리' },
  { c: '냐', sound: '냐', word: '냐옹',  emoji: '🐱', ex: 'ㄴ + ㅑ = 냐 → 냐옹' },
  { c: '여', sound: '여', word: '여우',  emoji: '🦊', ex: 'ㅕ → 여우에서 나는 소리' },
  { c: '겨', sound: '겨', word: '겨울',  emoji: '❄️', ex: 'ㄱ + ㅕ = 겨 → 겨울' },
  { c: '요', sound: '요', word: '요리',  emoji: '🍳', ex: 'ㅛ → 요리에서 나는 소리' },
  { c: '교', sound: '교', word: '교사',  emoji: '👨‍🏫', ex: 'ㄱ + ㅛ = 교 → 교사' },
  { c: '유', sound: '유', word: '유리',  emoji: '🪟', ex: 'ㅠ → 유리에서 나는 소리' },
  { c: '뇨', sound: '뇨', word: '뇨키',  emoji: '🍝', ex: 'ㄴ + ㅛ = 뇨 → 뇨키' },
]

export const LESSONS = [
  { id: 0, title: '이중모음 조합 배우기',  sub: 'ㅑ ㅕ ㅛ ㅠ 이중모음을 읽어요',      icon: '📖', bg: '#f3e8ff', type: 'learn',  chars: null },
  { id: 1, title: 'ㅑ · ㅕ 구분 맞히기',   sub: 'ㅑ/ㅕ 소리를 정확히 구분해요',       icon: '🎯', bg: '#eeedfe', type: 'game-a', chars: [0,1,2,3] },
  { id: 2, title: 'ㅛ · ㅠ 소리 맞히기',   sub: '요 교 유 뇨 소리를 골라봐요',        icon: '🎮', bg: '#e1f5ee', type: 'game-a', chars: [4,5,6,7] },
  { id: 3, title: '그림 단어 맞히기',      sub: '그림 보고 단어를 골라봐요',           icon: '🖼️', bg: '#faece7', type: 'game-b', chars: null },
  { id: 4, title: '이중모음 전체 도전',     sub: '4개 이중모음 모두 섞어서 도전!',      icon: '⚡', bg: '#f1efe8', type: 'game-a', chars: [0,1,2,3,4,5,6,7] },
]

export const WORD_QS = [
  { emoji: '⚾', correct: '야구',  wrong: ['여우', '요리', '유리'] },
  { emoji: '🐱', correct: '냐옹',  wrong: ['겨울', '야구', '뇨키'] },
  { emoji: '🦊', correct: '여우',  wrong: ['야구', '겨울', '요리'] },
  { emoji: '❄️', correct: '겨울',  wrong: ['여우', '유리', '냐옹'] },
  { emoji: '🍳', correct: '요리',  wrong: ['유리', '야구', '교사'] },
  { emoji: '👨‍🏫', correct: '교사',  wrong: ['요리', '뇨키', '겨울'] },
  { emoji: '🪟', correct: '유리',  wrong: ['교사', '여우', '야구'] },
  { emoji: '🍝', correct: '뇨키',  wrong: ['냐옹', '교사', '유리'] },
]
