<template>
  <nav :class="`menu menu--${placement}`">
    <ul class="menu__list" v-if="placement === 'header'">
      <li class="menu__item" v-for="link in links" :key="link.name">
        <a href="#" class="menu__link">
          <span class="menu__text">{{ link.name }}</span>
        </a>
      </li>
    </ul>

    <div
      class="menu__col"
      v-if="placement === 'footer'"
      v-for="link in links"
      :key="link.heading"
    >
      <ul class="menu__list">
        <li class="menu__item">
          <span class="menu__heading">{{ link.heading }}</span>
          <a href="#" class="menu__link" v-for="linkName in link.names">
            <span :key="linkName.name" class="menu__text">{{
              linkName.name
            }}</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup name="Menu">
defineProps({
  links: {
    type: Object,
    required: true,
  },
  placement: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.menu {
  &__list {
    display: flex;
  }

  &__link {
    text-decoration: none;

    &:hover {
      @include hover;
    }
  }

  &--header & {
    &__list {
      border-left: $border;
      border-right: $border;
    }

    &__text {
      font-size: $fz-header-nav;
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
  }

  &--footer {
    display: flex;
  }

  &--footer & {
    &__col {
      &:first-of-type {
        margin-right: 79px;
      }

      &:not(:first-of-type) {
        margin-right: 70px;
      }

      &:last-of-type {
        margin-right: 0;
      }

      width: 250px;

      &:first-of-type {
        width: 150px;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
    }

    &__link {
      line-height: 1.5;

      border-bottom: 2px solid transparent;

      &:not(:last-of-type) {
        margin-bottom: 10px;
      }
    }

    &__heading {
      font-size: $fz-footer-nav-title;
      font-weight: $font-weight-bold;

      margin-bottom: 11px;
    }
  }
}
</style>
