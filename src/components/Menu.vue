<template>
  <nav :class="`menu menu--${placement}`">
    <ul class="menu__list">
      <li class="menu__item" v-for="link in links" :key="link.name">
        <a href="#" class="menu__link">
          <span v-if="link.placement === 'footer'" class="menu__heading">{{ link.heading }}</span>
          <span
            v-if="link.placement === 'footer'"
            v-for="linkName in link.names"
            :key="linkName.name"
            class="menu__text"
            >{{ linkName.name }}</span
          >
          <span class="menu__text">{{ link.name }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    links: {
      type: Array,
      required: true,
    },
    placement: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  &__list {
    display: flex;
  }

  &__link {
    text-decoration: none;
  }

  &__text {
    font-size: $fz-header-nav;
  }

  &--header & {
    &__list {
      border-left: $border;
      border-right: $border;
    }

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 183px;
      padding: 23px 0;

      &:not(:last-of-type) {
        border-right: $border;
      }
    }

    &__link {
      &:hover {
        transition: all 0.2s ease;
        opacity: 0.7;
      }
    }
  }
}
</style>
