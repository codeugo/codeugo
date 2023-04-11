<script setup lang="ts">
import { RouterView } from "vue-router";
import { OrbitControls, GLTFModel } from '@tresjs/cientos';
import { shallowRef } from 'vue'
import { useRenderLoop } from '@tresjs/core'
import 'animate.css';
const modelRef = shallowRef(null);
const { onLoop } = useRenderLoop();

onLoop(({ delta }) => {
  if (modelRef.value) {
    modelRef.value.model.rotation.y += delta;
  }
})
</script>


<template>
  <div class="container h-80">
    <TresCanvas shadows alpha>
      <TresScene> 
      <TresPerspectiveCamera :args="[75, 1, 0.1, 1000]" :position="[1, 0.8, 0]" :near="0.2" :far="10" />
      <OrbitControls />
      <TresAmbientLight :color="0xffffff" :intensity="3" />
      <TresDirectionalLight :position="[0, 8, 4]" :intensity="5" cast-shadow />
      <Suspense>
        <GLTFModel
          ref="modelRef"
          path="https://raw.githubusercontent.com/codeugo/codeugo/main/src/assets/model.gltf"
          draco
        />
      </Suspense>
      </TresScene>
    </TresCanvas>
    <div class="mx-auto flex max-w-screen-sm">
      <div class="w-full p-1">
        <div class="rounded-lg flex h-full items-center justify-center bg-primary-dark-lighter bg-opacity-25">
          <h2 class="text-xl font-semibold font-mplusrounded">code(ugo) est un apprenti développeur de France !</h2>
        </div>
      </div>
    </div>
    <div class="animate__animated animate-fade-in-down py-6">
      <h3 class="decoration-accentgreen decoration-4 underline text-2xl font-bold font-mplusrounded">Moi</h3>
      <div class="flex">
        <p class="indent-8 font-mplusrounded text-justify pr-2">Enfant d'internet, je suis depuis le plus jeune âge passioné par l'informatique. À 12 ans je monte mon premier ordinateur et en 3ème je fais mon stage dans une des nombreuses start-up de Lyon. Aujourd'hui, j'apprends en autodidacte les différents outils de développement.</p>
        <img src="../assets/pfp.png">
      </div>
      <button type="button" @click="a()" class="px-3 py-3 bg-accentgreen text-white font-medium text-xs uppercase rounded-md shadow-md hover:bg-accentgreen2 hover:shadow-lg active:bg-accentgreen3 active:shadow-lg transition duration-150 ease-in-out">Mes Projets ></button>
      <h3 class="decoration-accentgreen decoration-4 underline text-2xl font-bold font-mplusrounded pt-2">J'utilise</h3>
      <div class="flex">
        <p class="indent-8 font-mplusrounded text-justify">HTML, CSS, JavaScript, Python, Vue.js, Tailwind CSS, Git, Figma, Arduino, Raspberry Pi</p>
      </div>
      <h3 class="decoration-accentgreen decoration-4 underline text-2xl font-bold font-mplusrounded pt-2">Bio</h3>
      <div class="flex">
        <ul class="font-mplusrounded list-disc list-inside">
          <li><span class="text-accentgreen">2005 </span>Né en Auvergne, France</li>
          <li><span class="text-accentgreen">2020 </span>Stage à Finkey, Lyon</li>
          <li><span class="text-accentgreen">2023 </span>Baccalauréat Général spécialité Numérique et Sciences Informatiques (NSI) et Mathématiques</li>
        </ul>
      </div>
      <h3 class="decoration-accentgreen decoration-4 underline text-2xl font-bold font-mplusrounded pt-2">J'♥</h3>
      <div class="flex">
        <p class="indent-8 font-mplusrounded text-justify">Apprendre, Jeux Vidéos, Informatique, Impression 3D, Musique, Manga</p>
      </div>
    </div>
  </div>
</template>