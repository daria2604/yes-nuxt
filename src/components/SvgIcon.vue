<template>
  <NuxtIcon :name="iconName" :class="'icon icon-' + className" />
</template>

<script setup name="SvgIcon">
defineProps({
  iconName: {
    type: String,
    required: true,
  },
  className: {
    type: String,
  },
});
</script>

<style lang="scss">
.icon {
  display: block;

  svg {
    margin: 0;
  }

  &-social svg {
    width: 30px;
    height: 30px;

    &:hover {
      @include hover;
    }
  }
}
</style>
