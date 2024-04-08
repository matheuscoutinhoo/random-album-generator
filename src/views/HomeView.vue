<script setup>
import NavBar from '@/components/NavBar.vue';
import MainSection from '@/components/MainSection.vue';


</script>

<template>
  <div class="flex flex-col">
      <NavBar />
    <main class="bg-gradient-to-b from-primary-color to-secondary-color text-txt-color flex flex-col justify-center items-center gap-5 min-h-screen">
      <MainSection />
    </main>
  </div>
</template>
