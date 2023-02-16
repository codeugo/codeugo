<template>
    <header class="sticky top-0 bg-weather-primary shadow-lg">
        <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-2">
            <RouterLink :to="{name: 'home'}">
                <div class="flex items-center gap-3">
                    <img class="text-2xl" src="../assets/code(ugo).svg">
                    <p class="text-2xl">Projets</p>
                </div>
            </RouterLink>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>