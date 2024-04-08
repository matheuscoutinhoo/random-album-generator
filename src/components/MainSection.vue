<script setup>
import { RouterLink } from 'vue-router';


const getAlbum = () => {
   setTimeout(() => {
   }, 500)
}
</script>

<template>
   <div class="text-center">
      <h1 class="text-3xl  font-bold">Gere um álbum aleatório para ouvir agora mesmo!</h1>
      <p>Acesse milhares de opções com o Spotify.</p>
   </div>
   <RouterLink to="/generator">
      <button @click="getAlbum" :disabled="isBtnClicked" class="bg-btn-color text-primary-color font-bold px-8 py-2 rounded-2xl hover:text-lg">Gerar Album</button>
   </RouterLink>
   

 </template>