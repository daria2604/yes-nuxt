<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__row">
        <div class="header__col header__col--logo">
          <Logo :placement="'header'" />
        </div>
        <div class="header__col header__col--nav">
          <Menu :links="links" :placement="'header'" />
        </div>
        <div class="header__col header__col--link">
          <RouterLink to="#" class="header__link">{{ customerLinkText }}</RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue';
import Menu from './Menu.vue';

export default {
  name: 'Header',
  components: { Logo, Menu },
  data() {
    return {
      links: [
        {
          name: 'Sun',
        },
        {
          name: 'Optical',
        },
        {
          name: 'Fit guide',
        },
      ],
      customerLinkText: 'Customer care',
    };
  },
};
</script>

<style lang="scss">
.header {
  border-top: $border;
  border-bottom: $border;

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__link {
    font-size: $fz-header-nav;
    text-decoration: none;

    &:hover {
      transition: all 0.2s ease;
      opacity: 0.7;
    }
  }
}
</style>
