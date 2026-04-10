export const CHARS = [
  { c: '강', sound: '강', word: '강',   emoji: '🏞️', ex: 'ㄱ + ㅏ + ㅇ받침 = 강' },
  { c: '공', sound: '공', word: '공',   emoji: '⚽', ex: 'ㄱ + ㅗ + ㅇ받침 = 공' },
  { c: '방', sound: '방', word: '방',   emoji: '🚪', ex: 'ㅂ + ㅏ + ㅇ받침 = 방' },
  { c: '탕', sound: '탕', word: '사탕', emoji: '🍬', ex: 'ㅌ + ㅏ + ㅇ받침 = 탕 → 사탕' },
  { c: '산', sound: '산', word: '산',   emoji: '⛰️', ex: 'ㅅ + ㅏ + ㄴ받침 = 산' },
  { c: '눈', sound: '눈', word: '눈',   emoji: '❄️', ex: 'ㄴ + ㅜ + ㄴ받침 = 눈' },
  { c: '반', sound: '반', word: '반',   emoji: '🏫', ex: 'ㅂ + ㅏ + ㄴ받침 = 반' },
  { c: '인', sound: '인', word: '인사', emoji: '🙇', ex: 'ㅇ + ㅣ + ㄴ받침 = 인 → 인사' },
]

export const LESSONS = [
  { id: 0, title: 'ㅇ · ㄴ 받침 배우기',  sub: '받침이 있는 글자를 읽어요',           icon: '📖', bg: '#fef3c7', type: 'learn',  chars: null },
  { id: 1, title: 'ㅇ 받침 소리 맞히기',   sub: '강 공 방 탕 소리를 골라봐요',         icon: '🎯', bg: '#eeedfe', type: 'game-a', chars: [0,1,2,3] },
  { id: 2, title: 'ㄴ 받침 소리 맞히기',   sub: '산 눈 반 인 소리를 골라봐요',         icon: '🎮', bg: '#e1f5ee', type: 'game-a', chars: [4,5,6,7] },
  { id: 3, title: '그림 단어 맞히기',      sub: '그림 보고 단어를 골라봐요',            icon: '🖼️', bg: '#faece7', type: 'game-b', chars: null },
  { id: 4, title: 'ㅇ/ㄴ 받침 혼합 도전',  sub: '두 가지 받침을 섞어서 도전!',          icon: '⚡', bg: '#f1efe8', type: 'game-a', chars: [0,1,2,3,4,5,6,7] },
]

export const WORD_QS = [
  { emoji: '🏞️', correct: '강',   wrong: ['공', '방', '산'] },
  { emoji: '⚽', correct: '공',   wrong: ['강', '반', '눈'] },
  { emoji: '🚪', correct: '방',   wrong: ['공', '산', '인사'] },
  { emoji: '🍬', correct: '사탕', wrong: ['강', '눈', '반'] },
  { emoji: '⛰️', correct: '산',   wrong: ['눈', '반', '공'] },
  { emoji: '❄️', correct: '눈',   wrong: ['산', '인사', '강'] },
  { emoji: '🏫', correct: '반',   wrong: ['눈', '사탕', '방'] },
  { emoji: '🙇', correct: '인사', wrong: ['반', '산', '공'] },
]
