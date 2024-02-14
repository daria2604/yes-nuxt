<template>
  <div class="socials">
    <ul class="socials__list">
      <li class="social" v-for="social in socials">
        <a href="#" class="social__icon">
          <SvgIcon :iconName="social.name" :className="'social'" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import SvgIcon from './SvgIcon.vue';

const socials = [
  {
    name: 'instagram',
  },
  {
    name: 'facebook',
  },
];
</script>

<style lang="scss" scoped>
.socials {
  &__list {
    display: flex;
    column-gap: 17px;
  }
}
</style>
