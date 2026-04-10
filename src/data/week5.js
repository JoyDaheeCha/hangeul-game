export const CHARS = [
  { c: '가', sound: '가', word: '가수',   emoji: '🎤', ex: 'ㄱ + ㅏ = 가 → 가수' },
  { c: '나', sound: '나', word: '나비',   emoji: '🦋', ex: 'ㄴ + ㅏ = 나 → 나비' },
  { c: '다', sound: '다', word: '다리',   emoji: '🌉', ex: 'ㄷ + ㅏ = 다 → 다리' },
  { c: '바', sound: '바', word: '바나나', emoji: '🍌', ex: 'ㅂ + ㅏ = 바 → 바나나' },
  { c: '사', sound: '사', word: '사자',   emoji: '🦁', ex: 'ㅅ + ㅏ = 사 → 사자' },
  { c: '거', sound: '거', word: '거미',   emoji: '🕷️', ex: 'ㄱ + ㅓ = 거 → 거미' },
  { c: '너', sound: '너', word: '너구리', emoji: '🦝', ex: 'ㄴ + ㅓ = 너 → 너구리' },
  { c: '버', sound: '버', word: '버스',   emoji: '🚌', ex: 'ㅂ + ㅓ = 버 → 버스' },
  { c: '어', sound: '어', word: '어머니', emoji: '👩', ex: 'ㅇ + ㅓ = 어 → 어머니' },
]

export const LESSONS = [
  { id: 0, title: 'ㅏ · ㅓ 조합 배우기',  sub: '자음 + ㅏ, ㅓ 조합을 읽어요',       icon: '📖', bg: '#e0f2fe', type: 'learn',  chars: null },
  { id: 1, title: '자음 + ㅏ 조합',       sub: '가 나 다 바 사 소리를 골라봐요',     icon: '🎯', bg: '#eeedfe', type: 'game-a', chars: [0,1,2,3,4] },
  { id: 2, title: '자음 + ㅓ 조합',       sub: '거 너 버 어 소리를 골라봐요',        icon: '🎮', bg: '#e1f5ee', type: 'game-a', chars: [5,6,7,8] },
  { id: 3, title: '그림 단어 맞히기',     sub: '그림 보고 단어를 골라봐요',           icon: '🖼️', bg: '#faece7', type: 'game-b', chars: null },
  { id: 4, title: 'ㅏ/ㅓ 혼합 도전',      sub: 'ㅏ 조합과 ㅓ 조합을 섞어서 도전!',   icon: '⚡', bg: '#f1efe8', type: 'game-a', chars: [0,1,2,3,4,5,6,7,8] },
]

export const WORD_QS = [
  { emoji: '🎤', correct: '가수',   wrong: ['나비', '다리', '사자'] },
  { emoji: '🦋', correct: '나비',   wrong: ['가수', '바나나', '거미'] },
  { emoji: '🌉', correct: '다리',   wrong: ['나비', '사자', '버스'] },
  { emoji: '🍌', correct: '바나나', wrong: ['다리', '거미', '어머니'] },
  { emoji: '🦁', correct: '사자',   wrong: ['바나나', '버스', '가수'] },
  { emoji: '🕷️', correct: '거미',   wrong: ['너구리', '어머니', '나비'] },
  { emoji: '🦝', correct: '너구리', wrong: ['거미', '버스', '다리'] },
  { emoji: '🚌', correct: '버스',   wrong: ['너구리', '가수', '사자'] },
  { emoji: '👩', correct: '어머니', wrong: ['버스', '거미', '바나나'] },
]
