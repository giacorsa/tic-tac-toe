<script setup>
    const emit = defineEmits(['select'])

    defineProps({
        value: String,
        isWinning: Boolean
    })
</script>

<template>
  <button 
    class="cell"
    :class="{ winning: isWinning}"
    @click="emit('select')"
    :disabled="!!value"
  >
    {{ value }}
  </button>
</template>

<style scoped>
    .cell {
        width: 100px;
        height: 100px;
        background: #f0f2f5;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
        cursor: pointer;
        transition: background 0.2s;
    }

    .cell:hover {
        background: #e0e0e0;
    }

    .cell:disabled {
        background: #c8ffc8;
        border: 2px solid #4caf50;
    }
</style>
