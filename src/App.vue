<script setup lang="ts">
import { RouterView } from 'vue-router';
import LoadingScreen from '@/components/LoadingScreen.vue';
</script>

<template>
    <main>
        <LoadingScreen />
        <RouterView />
    </main>
</template>
