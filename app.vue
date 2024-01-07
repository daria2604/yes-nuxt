<template>
  <div class="page">
    <Header />
    <slot />
    <Footer />
  </div>
  <NuxtPage />
</template>

<script>
import Header from '@/src/components/Header.vue';
import Footer from '@/src/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
