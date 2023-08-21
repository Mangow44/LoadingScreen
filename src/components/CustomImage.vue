<script setup lang="ts">
import { useLoadingStore } from '@/stores/loadingStore.store';

defineProps<{
    src: string;
    alt: string;
}>();

const loadingStore = useLoadingStore();
</script>

<template>
    <img :ref="(el) => loadingStore.subscribe(el as HTMLElement)" :src="src" :alt="alt" />
</template>
