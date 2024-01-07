<template>
  <footer class="footer">
    <div class="footer__header">
      <div class="footer__container">
        <Logo :placement="'footer'" />
        <p class="footer__motto">We treat your eyes with care</p>
      </div>
    </div>
    <div class="footer__container">
      <div class="footer__col">
        <div class="footer__row footer__row--menu">
          <Menu :links="links" :placement="'footer'" />
        </div>
        <div class="footer__row footer__row--copyright"></div>
        <div class="footer__row footer__row--caption"></div>
      </div>
      <div class="footer__col">
        <div class="footer__row footer__row--text"></div>
        <div class="footer__row footer__row--contacts">
          <div class="footer__col">
            <div class="footer__col footer__col--contacts"></div>
            <div class="footer__col footer__col--socials"></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from './Logo.vue';
import Menu from './Menu.vue';

export default {
  name: 'Footer',
  components: { Logo, Menu },
  data() {
    return {
      links: [
        {
          heading: 'Shop',
          names: [
            {
              name: 'Sun'
            },
            {
              name: 'Optical'
            },
            {
              name: 'Brands'
            }
          ]
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 30px;
  padding-bottom: 22px;

  background-color: $color-footer;

  &__container {
    padding-left: 138px;
    padding-right: 136px;
  }

  &__header {
    border-bottom: $border;
  }

  &__motto {
    font-weight: $font-weight-bold;
    line-height: 1.55;
  }
}
</style>
