<template>
  <footer class="footer">
    <div class="footer__header">
      <div class="footer__container">
        <div class="footer__col footer__col--header">
          <Logo :placement="'footer'" />
          <p class="footer__motto">We treat your eyes with care</p>
        </div>
      </div>
    </div>
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__col footer__col--left">
          <div class="footer__row footer__row--menu">
            <Menu :links="links" :placement="'footer'" />
          </div>
          <div class="footer__row footer__row--copyright">
            <p class="footer__designer">Designed and built by Margarita</p>
            <p class="footer__copyright">&copy; 2020 Yes for Eyes</p>
          </div>
          <div class="footer__row footer__row--caption">
            <p class="footer__caption">
              Photo materials belong to
              <a href="#" class="footer__caption-link">Krewe</a>,
              <a href="#" class="footer__caption-link">Carla Colour</a>,
              <a href="#" class="footer__caption-link">TIJN</a>,
              <a href="#" class="footer__caption-link">Modern Legacy</a>,
              <a href="https://unsplash.com/" class="footer__caption-link"
                >Unsplash</a
              >
            </p>
          </div>
        </div>
        <div class="footer__col footer__col--right">
          <div class="footer__row footer__row--text">
            <p class="footer__text">
              No spam, just pure inspiration and&nbsp;good news
            </p>
          </div>
          <span class="footer__line"></span>
          <div class="footer__row footer__row--contacts">
            <div class="footer__row footer__row--socials">
              <p class="footer__text">We are always close</p>
              <div class="footer__socials"></div>
            </div>
            <div class="footer__row footer__row--connect">
              <a :href="'tel:' + telephone" class="footer__link">{{
                telephone
              }}</a>
              <a :href="'mailto:' + email" class="footer__link">{{ email }}</a>
            </div>
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
              name: 'Sun',
            },
            {
              name: 'Optical',
            },
            {
              name: 'Brands',
            },
          ],
        },
        {
          heading: 'Customer care',
          names: [
            {
              name: 'FAQ',
            },
            {
              name: 'Shipping and returns',
            },
            {
              name: 'Fit guide',
            },
          ],
        },
        {
          heading: 'Info',
          names: [
            {
              name: 'Terms and conditions',
            },
            {
              name: 'Privacy policy',
            },
          ],
        },
      ],
      telephone: '+31 657 485 73 26',
      email: 'hello@yesforeyes.com',
    };
  },
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

  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__col {
    display: flex;
    flex-direction: column;

    &--header {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 22px;
    }

    &--left {
      border-right: $border;
    }

    &--right {
      margin-left: 41px;
    }
  }

  &__row {
    &--menu {
      margin-top: 35px;
    }

    &--copyright {
      margin-top: 35px;
    }

    &--text {
      margin-top: 36px;
    }

    &--caption {
      margin-top: 30px;
    }

    &--socials {
      display: flex;
      flex-direction: row;

      margin-bottom: 5px;
    }

    &--connect {
      display: flex;
      flex-direction: column;
      row-gap: 5px;
    }
  }

  &__line {
    display: block;
    height: 2px;
    width: 220px;
    margin-top: 50px;
    margin-bottom: 45px;

    background-color: $black;
  }

  &__header {
    border-bottom: $border;
  }

  &__motto {
    font-weight: $font-weight-bold;
    line-height: 1.55;
  }

  &__caption {
    font-size: $fz-footer-caption;

    &-link {
      text-decoration: none;

      border-bottom: 1px solid $black;
      cursor: pointer;
    }
  }

  &__text {
    line-height: 1.5;
    text-wrap: pretty;
  }

  &__link {
    text-decoration: none;

    cursor: pointer;
  }

  &__designer,
  &__copyright {
    line-height: 1.5;
  }
}
</style>
