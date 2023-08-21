<script setup lang="ts">
import CustomImage from '@/components/CustomImage.vue';
</script>

<template>
    <CustomImage
        :src="'https://img.freepik.com/photos-premium/fond-nature-rafraichissante-bokeh_948265-2082.jpg'"
        :alt="'Nature rafraichissante'"
    />

    <CustomImage
        :src="'https://img.freepik.com/photos-gratuite/peinture-lac-montagne-montagne-arriere-plan_188544-9126.jpg?w=2000'"
        :alt="'Lac et montagne'"
    />

    <CustomImage :src="'https://wallpaperaccess.com/full/31189.jpg'" :alt="'Montagne et prairie'" />

    <CustomImage
        :src="'https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg'"
        :alt="'Coucher de soleil en forêt'"
    />

    <CustomImage
        :src="'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w'"
        :alt="'Etoiles dans le ciel'"
    />
</template>
