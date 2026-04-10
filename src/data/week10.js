export const CHARS = [
  { c: '달', sound: '달', word: '달',   emoji: '🌙', ex: 'ㄷ + ㅏ + ㄹ받침 = 달' },
  { c: '별', sound: '별', word: '별',   emoji: '⭐', ex: 'ㅂ + ㅕ + ㄹ받침 = 별' },
  { c: '말', sound: '말', word: '말',   emoji: '🐴', ex: 'ㅁ + ㅏ + ㄹ받침 = 말' },
  { c: '늘', sound: '늘', word: '하늘', emoji: '🌤️', ex: 'ㄴ + ㅡ + ㄹ받침 = 늘 → 하늘' },
  { c: '곰', sound: '곰', word: '곰',   emoji: '🐻', ex: 'ㄱ + ㅗ + ㅁ받침 = 곰' },
  { c: '봄', sound: '봄', word: '봄',   emoji: '🌸', ex: 'ㅂ + ㅗ + ㅁ받침 = 봄' },
  { c: '감', sound: '감', word: '감',   emoji: '🍊', ex: 'ㄱ + ㅏ + ㅁ받침 = 감' },
  { c: '름', sound: '름', word: '구름', emoji: '☁️', ex: 'ㄹ + ㅡ + ㅁ받침 = 름 → 구름' },
]

export const LESSONS = [
  { id: 0, title: 'ㄹ · ㅁ 받침 배우기',  sub: 'ㄹ 받침과 ㅁ 받침을 읽어요',          icon: '📖', bg: '#d1fae5', type: 'learn',  chars: null },
  { id: 1, title: 'ㄹ 받침 소리 맞히기',   sub: '달 별 말 늘 소리를 골라봐요',         icon: '🎯', bg: '#eeedfe', type: 'game-a', chars: [0,1,2,3] },
  { id: 2, title: 'ㅁ 받침 소리 맞히기',   sub: '곰 봄 감 름 소리를 골라봐요',         icon: '🎮', bg: '#faeeda', type: 'game-a', chars: [4,5,6,7] },
  { id: 3, title: '그림 단어 맞히기',      sub: '그림 보고 단어를 골라봐요',            icon: '🖼️', bg: '#faece7', type: 'game-b', chars: null },
  { id: 4, title: '4가지 받침 혼합 도전',   sub: 'ㅇ ㄴ ㄹ ㅁ 받침 모두 섞어서 도전!',  icon: '⚡', bg: '#f1efe8', type: 'game-a', chars: [0,1,2,3,4,5,6,7] },
]

export const WORD_QS = [
  { emoji: '🌙', correct: '달',   wrong: ['별', '말', '곰'] },
  { emoji: '⭐', correct: '별',   wrong: ['달', '감', '봄'] },
  { emoji: '🐴', correct: '말',   wrong: ['별', '곰', '달'] },
  { emoji: '🌤️', correct: '하늘', wrong: ['구름', '달', '봄'] },
  { emoji: '🐻', correct: '곰',   wrong: ['봄', '감', '별'] },
  { emoji: '🌸', correct: '봄',   wrong: ['곰', '말', '하늘'] },
  { emoji: '🍊', correct: '감',   wrong: ['봄', '달', '구름'] },
  { emoji: '☁️', correct: '구름', wrong: ['감', '하늘', '곰'] },
]
