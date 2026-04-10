export const CHARS = [
  { c: '고', sound: '고', word: '고구마', emoji: '🍠', ex: 'ㄱ + ㅗ = 고 → 고구마' },
  { c: '도', sound: '도', word: '도토리', emoji: '🌰', ex: 'ㄷ + ㅗ = 도 → 도토리' },
  { c: '두', sound: '두', word: '두부',   emoji: '🧈', ex: 'ㄷ + ㅜ = 두 → 두부' },
  { c: '구', sound: '구', word: '구두',   emoji: '👞', ex: 'ㄱ + ㅜ = 구 → 구두' },
  { c: '포', sound: '포', word: '포도',   emoji: '🍇', ex: 'ㅍ + ㅗ = 포 → 포도' },
  { c: '기', sound: '기', word: '기린',   emoji: '🦒', ex: 'ㄱ + ㅣ = 기 → 기린' },
  { c: '비', sound: '비', word: '비누',   emoji: '🧼', ex: 'ㅂ + ㅣ = 비 → 비누' },
  { c: '그', sound: '그', word: '그네',   emoji: '🛝', ex: 'ㄱ + ㅡ = 그 → 그네' },
  { c: '피', sound: '피', word: '피아노', emoji: '🎹', ex: 'ㅍ + ㅣ = 피 → 피아노' },
]

export const LESSONS = [
  { id: 0, title: 'ㅗ·ㅜ·ㅡ·ㅣ 조합 배우기', sub: '다양한 모음 조합을 읽어요',          icon: '📖', bg: '#e0f7fa', type: 'learn',  chars: null },
  { id: 1, title: 'ㅗ · ㅜ 조합 맞히기',      sub: '고 도 두 구 포 소리를 골라봐요',     icon: '🎯', bg: '#eeedfe', type: 'game-a', chars: [0,1,2,3,4] },
  { id: 2, title: 'ㅡ · ㅣ 조합 맞히기',      sub: '기 비 그 피 소리를 골라봐요',        icon: '🎮', bg: '#faeeda', type: 'game-a', chars: [5,6,7,8] },
  { id: 3, title: '그림 단어 맞히기',         sub: '그림 보고 단어를 골라봐요',           icon: '🖼️', bg: '#faece7', type: 'game-b', chars: null },
  { id: 4, title: '6개 모음 혼합 도전',        sub: '이번 주 전체 섞어서 도전!',          icon: '⚡', bg: '#f1efe8', type: 'game-a', chars: [0,1,2,3,4,5,6,7,8] },
]

export const WORD_QS = [
  { emoji: '🍠', correct: '고구마', wrong: ['도토리', '구두', '포도'] },
  { emoji: '🌰', correct: '도토리', wrong: ['고구마', '두부', '기린'] },
  { emoji: '🧈', correct: '두부',   wrong: ['도토리', '포도', '비누'] },
  { emoji: '👞', correct: '구두',   wrong: ['두부', '그네', '피아노'] },
  { emoji: '🍇', correct: '포도',   wrong: ['구두', '기린', '고구마'] },
  { emoji: '🦒', correct: '기린',   wrong: ['비누', '피아노', '도토리'] },
  { emoji: '🧼', correct: '비누',   wrong: ['기린', '그네', '두부'] },
  { emoji: '🛝', correct: '그네',   wrong: ['비누', '고구마', '포도'] },
  { emoji: '🎹', correct: '피아노', wrong: ['그네', '기린', '구두'] },
]
