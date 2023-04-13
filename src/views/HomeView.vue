<template>
  <div class="container h-80">
    <div class="animate-fade-in-down py-6">
      <h3 class="decoration-accentgreen decoration-4 underline text-2xl font-bold font-mplusrounded sm:pt-2 pt-8">Moi</h3>
      <div class="flex">
        <p class="indent-8 font-mplusrounded text-justify pr-2">Enfant d'internet, je suis depuis le plus jeune âge passionné par l'informatique. À 12 ans je monte mon premier ordinateur et en 3ème je fais mon stage dans une des nombreuses start-up de Lyon. Aujourd'hui, j'apprends en autodidacte les différents outils de développement.</p>
        <img class="hidden lg:block object-scale-down" src="../assets/pfp.png">
      </div>
      <RouterLink :to="{name: 'projects'}">
        <button type="button" class="px-3 py-3 bg-accentgreen text-white font-medium text-xs uppercase rounded-md shadow-md hover:bg-accentgreen2 hover:shadow-lg active:bg-accentgreen3 active:shadow-lg transition duration-150 ease-in-out">Mes Projets ></button>
      </RouterLink>
      <h3 class="decoration-accentgreen decoration-4 underline text-2xl font-bold font-mplusrounded pt-2">J'utilise</h3>
      <div class="flex">
        <p class="indent-8 font-mplusrounded text-justify">HTML, CSS, JavaScript, Python, Vue.js, Tailwind CSS, Git, Figma, Arduino, Raspberry Pi, VSCode</p>
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