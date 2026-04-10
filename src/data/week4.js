export const CHARS = [
  { c: 'ㅈ', sound: '즈', word: '지구',   emoji: '🌍', ex: 'ㅈ → 지구에서 나는 소리' },
  { c: 'ㅊ', sound: '츠', word: '치마',   emoji: '👗', ex: 'ㅊ → 치마에서 나는 소리 (거센소리)' },
  { c: 'ㅌ', sound: '트', word: '토끼',   emoji: '🐰', ex: 'ㅌ → 토끼에서 나는 소리 (거센소리)' },
  { c: 'ㅍ', sound: '프', word: '포도',   emoji: '🍇', ex: 'ㅍ → 포도에서 나는 소리' },
  { c: 'ㅑ', sound: '야', word: '야구',   emoji: '⚾', ex: 'ㅑ → 야구에서 나는 소리' },
  { c: 'ㅕ', sound: '여', word: '여우',   emoji: '🦊', ex: 'ㅕ → 여우에서 나는 소리' },
  { c: '가', sound: '가', word: '가수',   emoji: '🎤', ex: 'ㄱ + ㅏ = 가' },
  { c: '나', sound: '나', word: '나비',   emoji: '🦋', ex: 'ㄴ + ㅏ = 나' },
  { c: '사', sound: '사', word: '사자',   emoji: '🦁', ex: 'ㅅ + ㅏ = 사' },
]

export const LESSONS = [
  { id: 0, title: '자모 전체 총정리',        sub: '14개 자음 + 10개 모음 총복습',        icon: '📖', bg: '#fdf6e3', type: 'learn',  chars: null },
  { id: 1, title: '헷갈리는 자음 쌍',        sub: 'ㅈ/ㅊ, ㅌ/ㅍ 집중 구분',             icon: '🎯', bg: '#eeedfe', type: 'game-a', chars: [0,1,2,3] },
  { id: 2, title: '모음 구분 + 조합 맛보기', sub: 'ㅑ/ㅕ 구분 + 가 나 사 조합',          icon: '🎮', bg: '#e1f5ee', type: 'game-a', chars: [4,5,6,7,8] },
  { id: 3, title: '그림 단어 맞히기',        sub: '그림 보고 단어를 골라봐요',            icon: '🖼️', bg: '#faece7', type: 'game-b', chars: null },
  { id: 4, title: '1단계 전체 도전',         sub: '자음·모음·조합 모두 섞어서 도전!',     icon: '⚡', bg: '#f1efe8', type: 'game-a', chars: [0,1,2,3,4,5,6,7,8] },
]

export const WORD_QS = [
  { emoji: '🌍', correct: '지구',   wrong: ['치마', '토끼', '포도'] },
  { emoji: '👗', correct: '치마',   wrong: ['지구', '포도', '야구'] },
  { emoji: '🐰', correct: '토끼',   wrong: ['포도', '여우', '가수'] },
  { emoji: '🍇', correct: '포도',   wrong: ['토끼', '나비', '사자'] },
  { emoji: '⚾', correct: '야구',   wrong: ['여우', '지구', '치마'] },
  { emoji: '🦊', correct: '여우',   wrong: ['야구', '토끼', '가수'] },
  { emoji: '🎤', correct: '가수',   wrong: ['나비', '사자', '지구'] },
  { emoji: '🦋', correct: '나비',   wrong: ['가수', '여우', '포도'] },
  { emoji: '🦁', correct: '사자',   wrong: ['나비', '가수', '치마'] },
]
