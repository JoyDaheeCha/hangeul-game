export const CHARS = [
  { c: '나', sound: '나', word: '나비',   emoji: '🦋', ex: '나비가 날아요' },
  { c: '곰', sound: '곰', word: '곰',     emoji: '🐻', ex: '곰이 달려요' },
  { c: '강', sound: '강', word: '강아지', emoji: '🐶', ex: '강아지는 친구예요' },
  { c: '밥', sound: '밥', word: '밥',     emoji: '🍚', ex: '밥을 먹어요' },
  { c: '사', sound: '사', word: '사과',   emoji: '🍎', ex: '곰이 사과를 먹어요' },
  { c: '하', sound: '하', word: '하늘',   emoji: '🌤️', ex: '하늘이 파래요' },
  { c: '달', sound: '달', word: '달',     emoji: '🌙', ex: '달이 떠요' },
  { c: '별', sound: '별', word: '별',     emoji: '⭐', ex: '별이 빛나요' },
]

export const LESSONS = [
  { id: 0, title: '12주 전체 총정리',    sub: '자음·모음·받침 전체를 복습해요',      icon: '📖', bg: '#fee2e2', type: 'learn',  chars: null },
  { id: 1, title: '받침 혼합 도전',      sub: '다양한 받침을 섞어서 읽어봐요',       icon: '🎯', bg: '#eeedfe', type: 'game-a', chars: [0,1,2,3] },
  { id: 2, title: '이야기 단어 맞히기',   sub: '이야기 속 단어를 골라봐요',          icon: '🎮', bg: '#e1f5ee', type: 'game-a', chars: [4,5,6,7] },
  { id: 3, title: '그림 단어 맞히기',    sub: '그림 보고 단어를 골라봐요',           icon: '🖼️', bg: '#faece7', type: 'game-b', chars: null },
  { id: 4, title: '최종 도전',           sub: '12주 동안 배운 모든 것을 도전!',      icon: '🏆', bg: '#fdf6e3', type: 'game-a', chars: [0,1,2,3,4,5,6,7] },
]

export const WORD_QS = [
  { emoji: '🦋', correct: '나비',   wrong: ['곰', '강아지', '밥'] },
  { emoji: '🐻', correct: '곰',     wrong: ['나비', '사과', '달'] },
  { emoji: '🐶', correct: '강아지', wrong: ['곰', '하늘', '별'] },
  { emoji: '🍚', correct: '밥',     wrong: ['사과', '나비', '달'] },
  { emoji: '🍎', correct: '사과',   wrong: ['밥', '곰', '하늘'] },
  { emoji: '🌤️', correct: '하늘',   wrong: ['사과', '별', '강아지'] },
  { emoji: '🌙', correct: '달',     wrong: ['별', '하늘', '나비'] },
  { emoji: '⭐', correct: '별',     wrong: ['달', '곰', '사과'] },
]
