<template>
  <div :class="`logo logo--${placement}`">
    <a href="/" class="logo__link">
      <img src="../assets/images/logo.svg" alt="Логотип" class="logo__image" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    placement: {
      type: String,
      required: true,
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  width: 116px;
  height: 52px;
}
</style>
