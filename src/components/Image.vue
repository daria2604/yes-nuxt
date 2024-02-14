<template>
  <article :class="'image image--' + type">
    <a :href="link" class="image__link" v-if="hasButton">
      <span class="image__link-text">{{ buttonText }}</span>
    </a>
  </article>
</template>

<script setup name="Image">
defineProps({
  type: {
    type: String,
    required: true,
  },
  hasButton: {
    type: Boolean,
    default: true,
  },
  buttonText: {
    type: String,
  },
  link: {
    type: String,
    default: '#',
  },
});
</script>

<style lang="scss" scoped>
.image {
  position: relative;

  width: 100%;
  height: 100%;

  &__link {
    position: absolute;
    bottom: 0;
    right: 0;

    text-decoration: none;

    background-color: $color-button;
    padding: 41px 80px;

    &:hover &-text {
      @include hover;
    }

    &-text {
      text-transform: uppercase;
    }
  }

  &--women {
    background: url(../assets/images/woman.jpeg) center/cover no-repeat;
  }

  &--men {
    background: url(../assets/images/man.jpeg) center/cover no-repeat;
  }
}
</style>
