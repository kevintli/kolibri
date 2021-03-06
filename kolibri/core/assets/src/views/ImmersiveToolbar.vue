<template>

  <UiToolbar
    :title="appBarTitle"
    textColor="white"
    type="colored"
    :showIcon="showIcon"
    @nav-icon-click="$emit('navIconClick')"
    :class="{ secondary: !primary }"
    :style="{ height: height + 'px' }"
  >
    <router-link
      v-if="hasRoute"
      slot="icon"
      :to="route"
      class="link"
    >
      <!-- TODO add aria label? -->
      <UiIconButton
        type="flat"
        @click="$emit('navIconClick')"
        class="icon"
      >
        <mat-svg
          v-if="icon === 'close'"
          name="close"
          category="navigation"
        />
        <mat-svg
          v-else-if="icon === 'arrow_back' && !isRtl"
          name="arrow_back"
          category="navigation"
        />
        <mat-svg
          v-else-if="icon === 'arrow_back' && isRtl"
          name="arrow_forward"
          category="navigation"
        />
      </UiIconButton>
    </router-link>

    <UiIconButton
      v-else
      type="flat"
      @click="$emit('navIconClick')"
      class="icon"
    >
      <mat-svg
        v-if="icon === 'close'"
        name="close"
        category="navigation"
      />
      <mat-svg
        v-if="icon === 'arrow_back' && !isRtl"
        name="arrow_back"
        category="navigation"
      />
      <mat-svg
        v-if="icon === 'arrow_back' && isRtl"
        name="arrow_forward"
        category="navigation"
      />
    </UiIconButton>
  </UiToolbar>

</template>


<script>

  import UiToolbar from 'keen-ui/src/UiToolbar';
  import UiIconButton from 'keen-ui/src/UiIconButton';
  import { validateLinkObject } from 'kolibri.utils.validators';

  export default {
    name: 'ImmersiveToolbar',
    components: {
      UiToolbar,
      UiIconButton,
    },
    props: {
      appBarTitle: {
        type: String,
        required: true,
      },
      height: {
        type: Number,
        required: true,
      },
      icon: {
        type: String,
        required: false,
        default: 'close',
        validator(val) {
          return ['close', 'arrow_back'].includes(val);
        },
      },
      showIcon: {
        type: Boolean,
        required: false,
        default: true,
      },
      route: {
        type: Object,
        required: false,
        validator: validateLinkObject,
      },
      primary: {
        type: Boolean,
        required: false,
        default: true,
      },
    },
    computed: {
      hasRoute() {
        return Boolean(this.route);
      },
    },
  };

</script>


<style lang="scss" scoped>

  @import '~kolibri.styles.definitions';

  // only used when using a link. Otherwise, uses UiToolbar's styles
  .icon {
    width: 3em;
    // copied from keen
    height: 3em;
    fill: white;
  }

  .link {
    display: inline-block;
    border-radius: 50%;
    &:focus,
    &:hover {
      background-color: $core-action-dark;
    }
  }

  .secondary {
    background-color: $core-text-default;
    .link {
      &:focus,
      &:hover {
        background-color: darken($core-text-default, 25%);
      }
    }
  }

</style>
