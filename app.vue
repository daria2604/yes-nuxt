<template>
  <div class="page">
    <Header />
    <Main>
      <NuxtPage />
    </Main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/src/components/Header.vue';
import Footer from '@/src/components/Footer.vue';
import Main from '@/src/components/Main.vue';
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
