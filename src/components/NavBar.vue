<script setup>
import { AudioLines } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
</script>

<template>
   <div class="bg-primary-color text-white py-6 px-5 text-2xl font-bold flex justify-center border-b border-1 border-[#531A81] border-solid">
      <RouterLink to="/">
         <span class="flex gap-2 hover-text">
            <AudioLines size="32px"/>
            <p class="">Random Album Generator</p>
         </span>
      </RouterLink>
   </div>
</template>