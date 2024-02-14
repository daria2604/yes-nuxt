<template>
  <section class="lead">
    <div class="lead__intro">
      <h1 class="lead__heading">We treat your eyes with care</h1>
      <a href="#" class="lead__link">
        <span class="lead__link-text">See the collection</span>
        <SvgIcon :iconName="'arrow-right'" :className="'arrow'" />
      </a>
    </div>
    <div class="lead__image">
      <img
        src="../assets/images/lead-image.jpeg"
        alt="Девушка в розовых круглых очках с розовыми цветами на левом плече и на лице"
        class="lead__image-pic"
      />
    </div>
  </section>
</template>

<script setup name="Lead">
import SvgIcon from './SvgIcon.vue';
</script>

<style lang="scss" scoped>
.lead {
  position: relative;
  padding: 70px 120px 70px 130px;
  margin-top: 15px;

  &__intro {
    margin-top: 400px;
    margin-bottom: 144px;
  }

  &__heading {
    font-size: $fz-lead;
    font-weight: $font-weight-regular;
    line-height: 1.3;
  }

  &__link {
    text-decoration: none;

    display: flex;
    align-items: center;
    column-gap: 10px;

    margin-left: 10px;

    cursor: pointer;

    &:hover {
      @include hover;
    }

    &-text {
      font-size: $font-size-small;
      text-transform: uppercase;
    }
  }

  &__image {
    position: absolute;
    top: 70px;
    right: 120px;
    bottom: 70px;
    z-index: -1;

    &-pic {
      max-width: 488px;
      min-height: 578px;
    }
  }
}
</style>
