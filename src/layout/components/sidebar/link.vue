<template>
  <component v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script lang="ts">
  import { Vue, Component, Prop} from 'vue-property-decorator';
  import {isExternal} from '@/utils/validate';

  @Component
  export default class Link extends Vue {
    @Prop({ default: '' }) private readonly to!: string

    private linkProps(url: string): any {
      if (isExternal(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener',
        }
      } else {
        return {
          is: 'router-link',
          to: url,
        }
      }
    }
  }
</script>
