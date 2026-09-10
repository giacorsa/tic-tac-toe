<script setup>
    defineProps({
        value: String
    })
</script>

<template>
  <div class="cell">
    {{ value }}
  </div>
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
</style>
