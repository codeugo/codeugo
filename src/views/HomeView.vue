<script setup>
import { shallowRef } from 'vue';
import { RouterView } from "vue-router";
import { useRenderLoop } from '@tresjs/core';
import { OrbitControls, GLTFModel } from '@tresjs/cientos';
</script>


<template>
  <div class="container h-80">
    <TresCanvas shadows alpha :output-encoding="sRGBEncoding">
      <TresScene>
      <TresPerspectiveCamera :position="[2, 2, 3]" :fov="50" :near="0.2" :far="10" />
      <OrbitControls />
      <TresAmbientLight :color="0xffffff" :intensity="3" />
      <TresDirectionalLight :position="[0, 8, 4]" :intensity="5" cast-shadow />
      <Suspense>
        <GLTFModel
          ref="modelRef"
          path="./src/assets/model.gltf"
          draco
        />
      </Suspense>
      </TresScene>
  </TresCanvas>
    <main>Teste de TresJS et Cientos</main>
  </div>
</template>