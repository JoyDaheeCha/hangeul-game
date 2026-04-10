export const CHARS = [
  { c: 'ㅅ', sound: '스', word: '사자',  emoji: '🦁', ex: 'ㅅ → 사자에서 나는 소리' },
  { c: 'ㅏ', sound: '아', word: '아이',  emoji: '👧', img: '/images/child.svg',  ex: 'ㅏ → 아이에서 나는 소리' },
  { c: 'ㅓ', sound: '어', word: '어머니',emoji: '👩', img: '/images/mother.svg', ex: 'ㅓ → 어머니에서 나는 소리' },
  { c: 'ㅗ', sound: '오', word: '오리',  emoji: '🦆', ex: 'ㅗ → 오리에서 나는 소리' },
  { c: 'ㅜ', sound: '우', word: '우유',  emoji: '🥛', ex: 'ㅜ → 우유에서 나는 소리' },
]

export const LESSONS = [
  { id: 0, title: '자음·모음 배우기',  sub: 'ㅅ + ㅏ ㅓ ㅗ ㅜ 소리 익혀요',    icon: '📖', bg: '#e1f5ee', type: 'learn',  chars: null },
  { id: 1, title: 'ㅅ 소리 맞히기',    sub: 'ㄱ~ㅂ 복습 + ㅅ 소리 맞히기',     icon: '🎯', bg: '#eeedfe', type: 'game-a', chars: [0] },
  { id: 2, title: '모음 소리 맞히기',  sub: 'ㅏ ㅓ ㅗ ㅜ 소리를 골라봐요',      icon: '🔤', bg: '#faeeda', type: 'game-a', chars: [1,2,3,4] },
  { id: 3, title: '그림 단어 맞히기',  sub: '그림 보고 단어를 골라봐요',         icon: '🖼️', bg: '#faece7', type: 'game-b', chars: null },
  { id: 4, title: '전체 혼합 도전',    sub: '이번 주 전체 섞어서 도전!',         icon: '⚡', bg: '#f1efe8', type: 'game-a', chars: [0,1,2,3,4] },
]

export const WORD_QS = [
  { emoji: '🦁', correct: '사자',   wrong: ['아이', '오리', '우유'] },
  { emoji: '👧', img: '/images/child.svg',  correct: '아이',   wrong: ['사자', '어머니', '오리'] },
  { emoji: '👩', img: '/images/mother.svg', correct: '어머니', wrong: ['아이', '우유', '사자'] },
  { emoji: '🦆', correct: '오리',   wrong: ['사자', '아이', '우유'] },
  { emoji: '🥛', correct: '우유',   wrong: ['오리', '어머니', '사자'] },
]
