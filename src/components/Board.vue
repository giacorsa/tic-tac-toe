<script setup>
    import Cell from './Cell.vue'

    defineProps({
        board: Array,
        winningLine: Array
    })

    const emit = defineEmits(['play'])
</script>

<template>
  <div class="board">
    <Cell
      v-for="(value, index) in board"
      :key="index"
      :value="value"
      :isWinning="winningLine?.includes(index)"
      @select="emit('play', index)"
    />
  </div>
</template>

<style scoped>
    .board {
        display: grid;
        grid-template-columns: repeat(3, 100px);
        gap: 10px;
        justify-content: center;
        margin-top: 20px;
    }
</style>
