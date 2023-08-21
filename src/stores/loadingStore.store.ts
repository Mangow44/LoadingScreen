import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useLoadingStore = defineStore('loading', () => {
    const subscribedItems = ref<Map<HTMLElement, boolean>>(new Map());

    const loadingValue = computed<string>(() => {
        if (subscribedItems.value.size === 0) return '0';

        let loadedItems: number = 0;

        subscribedItems.value.forEach((value: boolean) => {
            if (value) loadedItems++;
        });

        return ((loadedItems / subscribedItems.value.size) * 100).toFixed(0);
    });

    function subscribe(element: HTMLElement): void {
        subscribedItems.value.set(element, false);

        listenLoadEvent(element);
    }

    function listenLoadEvent(element: HTMLElement): void {
        element.addEventListener('load', () => {
            subscribedItems.value.set(element, true);
        });
    }

    return { loadingValue, subscribe };
});
