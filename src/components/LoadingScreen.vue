<script setup lang="ts">
import { useLoadingStore } from '@/stores/loadingStore.store';

const loadingStore = useLoadingStore();
</script>

<template>
    <div :class="{ vanish: loadingStore.loadingValue === '100' }" class="loading-screen">
        <h1 class="loading-screen__item">{{ loadingStore.loadingValue }} %</h1>
    </div>
</template>

<style scoped>
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;

    display: flex;

    width: 100%;
    height: 100%;

    transition: 0.3s ease-in-out;

    background-color: #333333;
}

.vanish {
    opacity: 0;
}

.loading-screen__item {
    margin: auto;
    padding: 1rem;

    text-overflow: ellipsis;
    overflow: hidden;

    font-size: clamp(1rem, 30vw, 15rem);
    font-family: fantasy;
    white-space: nowrap;
    color: #f1f1f1;
}
</style>
