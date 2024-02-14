<template>
  <div class="images">
    <ul class="images__list">
      <li class="images__item" v-for="image in images">
        <Image
          :type="image.type"
          :hasButton="image.hasButton"
          :buttonText="image.buttonText"
          :link="image.link"
        />
      </li>
    </ul>
  </div>
</template>

<script setup name="Images">
import Image from './Image.vue';

defineProps({
  images: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.images {
  &__list {
    display: flex;
  }

  &__item {
    width: 100%;
    min-height: 620px;
  }
}
</style>
