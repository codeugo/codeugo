<template>
    <header class="sticky top-0 bg-weather-primary shadow-lg">
        <nav class="container flex flex-col sm:flex-row justify-center items-center gap-6 text-white py-2 font-mplusrounded">
            <RouterLink :to="{name: 'home'}">
                <div class="flex gap-3">
                    <img src="../assets/code(ugo).svg">
                </div>
            </RouterLink>
            <p>Projets</p>
            <a href="https://github.com/Askehraz" class="inline-flex gap-2 button">
                <img src="../assets/github.svg">
                Github
            </a>
            <div class="flex justify-end flex-1">
                <DarkMode/>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import DarkMode from "./DarkMode.vue";
</script>