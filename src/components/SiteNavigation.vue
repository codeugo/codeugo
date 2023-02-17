<template>
    <header class="sticky top-0 bg-weather-primary shadow-lg">
        <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-2">
            <div class="flex items-center gap-3">
                <RouterLink :to="{name: 'home'}">
                    <div class="flex items-center gap-3">
                        <img src="../assets/code(ugo).svg">
                    </div>
                </RouterLink>
                <p class="text-2xl">Projets</p>
            </div>
            <div class="flex gap-3 flex-1 justify-end">
                <img class="text-white" src="../assets/sun.svg">
            </div>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>