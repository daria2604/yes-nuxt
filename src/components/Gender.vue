<template>
  <section class="gender">
    <Images :images="images" />
  </section>
</template>

<script setup name="Gender">
import Images from './Images.vue';

const images = [
  {
    type: 'women',
    hasButton: true,
    buttonText: 'Shop women',
    link: '#',
  },
  {
    type: 'men',
    hasButton: true,
    buttonText: 'Shop men',
    link: '#',
  },
];
</script>

<style lang="scss" scoped>
.gender {
  margin-top: 150px;
}
</style>
