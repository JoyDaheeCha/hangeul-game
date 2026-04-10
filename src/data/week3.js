export const CHARS = [
  { c: 'ㅇ', sound: '으', word: '오이',   emoji: '🥒', ex: 'ㅇ → 소리가 없는 자리, 오이의 첫소리' },
  { c: 'ㅈ', sound: '즈', word: '지구',   emoji: '🌍', ex: 'ㅈ → 지구에서 나는 소리' },
  { c: 'ㅊ', sound: '츠', word: '치마',   emoji: '👗', ex: 'ㅊ → 치마에서 나는 소리 (거센소리)' },
  { c: 'ㅋ', sound: '크', word: '코끼리', emoji: '🐘', ex: 'ㅋ → 코끼리에서 나는 소리 (거센소리)' },
  { c: 'ㅌ', sound: '트', word: '토끼',   emoji: '🐰', ex: 'ㅌ → 토끼에서 나는 소리 (거센소리)' },
  { c: 'ㅍ', sound: '프', word: '포도',   emoji: '🍇', ex: 'ㅍ → 포도에서 나는 소리' },
  { c: 'ㅎ', sound: '흐', word: '하마',   emoji: '🦛', ex: 'ㅎ → 하마에서 나는 소리 (입김 소리)' },
  { c: 'ㅑ', sound: '야', word: '야구',   emoji: '⚾', ex: 'ㅑ → 야구에서 나는 소리' },
  { c: 'ㅕ', sound: '여', word: '여우',   emoji: '🦊', ex: 'ㅕ → 여우에서 나는 소리' },
]

export const LESSONS = [
  { id: 0, title: '자음·모음 배우기',        sub: 'ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ + 모음 소리 익혀요', icon: '📖', bg: '#fde8df', type: 'learn',  chars: null },
  { id: 1, title: 'ㅇ ㅈ ㅊ ㅋ 소리 맞히기', sub: '4개 자음 소리를 골라봐요',                icon: '🎯', bg: '#eeedfe', type: 'game-a', chars: [0,1,2,3] },
  { id: 2, title: 'ㅌ ㅍ ㅎ + 모음 맞히기',  sub: '나머지 자음과 모음을 골라봐요',            icon: '🎮', bg: '#e1f5ee', type: 'game-a', chars: [4,5,6,7,8] },
  { id: 3, title: '그림 단어 맞히기',        sub: '그림 보고 단어를 골라봐요',                icon: '🖼️', bg: '#faece7', type: 'game-b', chars: null },
  { id: 4, title: '전체 혼합 도전',          sub: '이번 주 전체 섞어서 도전!',                icon: '⚡', bg: '#f1efe8', type: 'game-a', chars: [0,1,2,3,4,5,6,7,8] },
]

export const WORD_QS = [
  { emoji: '🥒', correct: '오이',   wrong: ['지구', '치마', '포도'] },
  { emoji: '🌍', correct: '지구',   wrong: ['오이', '코끼리', '하마'] },
  { emoji: '👗', correct: '치마',   wrong: ['지구', '토끼', '야구'] },
  { emoji: '🐘', correct: '코끼리', wrong: ['치마', '하마', '여우'] },
  { emoji: '🐰', correct: '토끼',   wrong: ['코끼리', '포도', '오이'] },
  { emoji: '🍇', correct: '포도',   wrong: ['토끼', '야구', '지구'] },
  { emoji: '🦛', correct: '하마',   wrong: ['포도', '여우', '치마'] },
  { emoji: '⚾', correct: '야구',   wrong: ['하마', '오이', '토끼'] },
  { emoji: '🦊', correct: '여우',   wrong: ['야구', '코끼리', '포도'] },
]
