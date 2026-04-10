export const CHARS = [
  { c: '기', sound: '기', word: '기차',   emoji: '🚂', ex: 'ㄱ + ㅣ = 기 → 기차' },
  { c: '토', sound: '토', word: '토마토', emoji: '🍅', ex: 'ㅌ + ㅗ = 토 → 토마토' },
  { c: '피', sound: '피', word: '피아노', emoji: '🎹', ex: 'ㅍ + ㅣ = 피 → 피아노' },
  { c: '유', sound: '유', word: '유모차', emoji: '👶', ex: 'ㅠ → 유 → 유모차' },
  { c: '바', sound: '바', word: '바나나', emoji: '🍌', ex: 'ㅂ + ㅏ = 바 → 바나나' },
  { c: '산', sound: '산', word: '산',     emoji: '⛰️', ex: '산 → 받침이 있는 글자 맛보기' },
  { c: '달', sound: '달', word: '달',     emoji: '🌙', ex: '달 → 받침이 있는 글자 맛보기' },
  { c: '밥', sound: '밥', word: '밥',     emoji: '🍚', ex: '밥 → 받침이 있는 글자 맛보기' },
  { c: '곰', sound: '곰', word: '곰',     emoji: '🐻', ex: '곰 → 받침이 있는 글자 맛보기' },
]

export const LESSONS = [
  { id: 0, title: '받침 없는 단어 읽기',   sub: '다양한 단어를 유창하게 읽어요',         icon: '📖', bg: '#fce7f3', type: 'learn',  chars: null },
  { id: 1, title: '조합 소리 맞히기',      sub: '기 토 피 유 바 소리를 골라봐요',        icon: '🎯', bg: '#eeedfe', type: 'game-a', chars: [0,1,2,3,4] },
  { id: 2, title: '받침 맛보기',           sub: '산 달 밥 곰 — 받침 소리를 느껴봐요',    icon: '🎮', bg: '#e1f5ee', type: 'game-a', chars: [5,6,7,8] },
  { id: 3, title: '그림 단어 맞히기',      sub: '그림 보고 단어를 골라봐요',             icon: '🖼️', bg: '#faece7', type: 'game-b', chars: null },
  { id: 4, title: '2단계 총정리 도전',     sub: '받침 없는 단어 + 받침 맛보기 도전!',    icon: '⚡', bg: '#f1efe8', type: 'game-a', chars: [0,1,2,3,4,5,6,7,8] },
]

export const WORD_QS = [
  { emoji: '🚂', correct: '기차',   wrong: ['토마토', '바나나', '산'] },
  { emoji: '🍅', correct: '토마토', wrong: ['기차', '피아노', '달'] },
  { emoji: '🎹', correct: '피아노', wrong: ['토마토', '유모차', '곰'] },
  { emoji: '👶', correct: '유모차', wrong: ['피아노', '바나나', '밥'] },
  { emoji: '🍌', correct: '바나나', wrong: ['유모차', '기차', '산'] },
  { emoji: '⛰️', correct: '산',     wrong: ['달', '밥', '기차'] },
  { emoji: '🌙', correct: '달',     wrong: ['산', '곰', '토마토'] },
  { emoji: '🍚', correct: '밥',     wrong: ['달', '산', '피아노'] },
  { emoji: '🐻', correct: '곰',     wrong: ['밥', '달', '바나나'] },
]
