<script setup>
  import Board from './components/Board.vue'
  import { useTicTacToe } from './composables/useTicTacToe'

  const {
    board,
    currentPlayer,
    winner,
    playAt,
    resetGame
  } = useTicTacToe()
</script>

<template>
  <div class="container">
    <h1>Tic Tac Toe</h1>

    <p v-if="winner" class="winner">
      🎉 Vincitore: {{ winner }}
    </p>

    <p v-else class="turn">
      Turno: <strong>{{ currentPlayer }}</strong>
    </p>

    <Board :board="board" @play="playAt" />

    <button class="reset-btn" @click="resetGame">
      Reset
    </button>
  </div>
</template>

<style scoped>
  .container {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    font-family: sans-serif;
  }

  .winner {
    font-size: 1.4rem;
    color: #4caf50;
  }

  .turn {
    font-size: 1.2rem;
  }

  .reset-btn {
    margin-top: 20px;
    padding: 10px 20px;
    background: #333;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  .reset-btn:hover {
    opacity: 0.8;
  }
</style>
