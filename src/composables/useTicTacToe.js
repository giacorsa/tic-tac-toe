import { ref, computed } from 'vue'

export function useTicTacToe() {
  const board = ref(Array(9).fill(null))
  const currentPlayer = ref('X')
  const winner = ref(null)
  const winningLine = ref(null)

  const wins = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ]

  const checkWinner = () => {
    for (const [a,b,c] of wins) {
      if (
        board.value[a] &&
        board.value[a] === board.value[b] &&
        board.value[a] === board.value[c]
      ) {
        winner.value = board.value[a]
        winningLine.value = [a, b, c]
      }
    }
  }

  const isDraw = computed(() => 
    !winner.value && board.value.every(cell => cell !== null)
  )

  const playAt = (index) => {
    if (winner.value || board.value[index]) return

    board.value[index] = currentPlayer.value
    checkWinner()

    if (!winner.value) {
      currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X'
    }
  }

  const resetGame = () => {
    board.value = Array(9).fill(null)
    currentPlayer.value = 'X'
    winner.value = null
    winningLine.value = null
  }

  return {
    board,
    currentPlayer,
    winner,
    winningLine,
    isDraw,
    playAt,
    resetGame
  }
}
