export const CHARS = [
  { c: '국', sound: '국', word: '국',     emoji: '🍲', ex: 'ㄱ + ㅜ + ㄱ받침 = 국' },
  { c: '책', sound: '책', word: '책',     emoji: '📚', ex: 'ㅊ + ㅐ + ㄱ받침 = 책' },
  { c: '밥', sound: '밥', word: '밥',     emoji: '🍚', ex: 'ㅂ + ㅏ + ㅂ받침 = 밥' },
  { c: '집', sound: '집', word: '집',     emoji: '🏠', ex: 'ㅈ + ㅣ + ㅂ받침 = 집' },
  { c: '입', sound: '입', word: '입',     emoji: '👄', ex: 'ㅇ + ㅣ + ㅂ받침 = 입' },
  { c: '김', sound: '김', word: '김밥',   emoji: '🍙', ex: 'ㄱ + ㅣ + ㅁ받침 = 김 → 김밥' },
  { c: '강', sound: '강', word: '강아지', emoji: '🐶', ex: '강아지가 달려요 — ㅇ 받침 복습' },
  { c: '곰', sound: '곰', word: '곰',     emoji: '🐻', ex: '곰이 사과를 먹어요 — ㅁ 받침 복습' },
]

export const LESSONS = [
  { id: 0, title: 'ㄱ·ㅂ 받침 + 문장',     sub: '새 받침과 짧은 문장을 읽어요',           icon: '📖', bg: '#ede9fe', type: 'learn',  chars: null },
  { id: 1, title: 'ㄱ 받침 소리 맞히기',     sub: '국 책 소리를 골라봐요',                  icon: '🎯', bg: '#eeedfe', type: 'game-a', chars: [0,1] },
  { id: 2, title: 'ㅂ 받침 소리 맞히기',     sub: '밥 집 입 소리를 골라봐요',               icon: '🎮', bg: '#e1f5ee', type: 'game-a', chars: [2,3,4] },
  { id: 3, title: '그림 단어 맞히기',        sub: '그림 보고 단어를 골라봐요',               icon: '🖼️', bg: '#faece7', type: 'game-b', chars: null },
  { id: 4, title: '받침 전체 혼합 도전',      sub: '6가지 받침 모두 섞어서 도전!',            icon: '⚡', bg: '#f1efe8', type: 'game-a', chars: [0,1,2,3,4,5,6,7] },
]

export const WORD_QS = [
  { emoji: '🍲', correct: '국',     wrong: ['책', '밥', '집'] },
  { emoji: '📚', correct: '책',     wrong: ['국', '입', '밥'] },
  { emoji: '🍚', correct: '밥',     wrong: ['집', '국', '김밥'] },
  { emoji: '🏠', correct: '집',     wrong: ['밥', '입', '국'] },
  { emoji: '👄', correct: '입',     wrong: ['집', '책', '강아지'] },
  { emoji: '🍙', correct: '김밥',   wrong: ['국', '밥', '곰'] },
  { emoji: '🐶', correct: '강아지', wrong: ['곰', '김밥', '집'] },
  { emoji: '🐻', correct: '곰',     wrong: ['강아지', '책', '밥'] },
]
