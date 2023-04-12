<template>
  <SiteNavigation/>
  <div class="flex flex-col">
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
  </div>
    <RouterView/>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
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

<style lang="scss" scoped>

</style>