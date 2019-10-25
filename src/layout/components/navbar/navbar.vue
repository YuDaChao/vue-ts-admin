<template>
  <div class="navbar">
    <hamburger
      class="hamburger-container"
      :is-active="sidebarOpen"
      @toggle-click="handleToggleHamburger"
    ></hamburger>
    <breadcrumb></breadcrumb>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace, Getter } from "vuex-class";

import Hamburger from "@/components/hamburger/hamburger.vue";
import Breadcrumb from "@/components/breadcrumb/breadcrumb.vue";

const appModule = namespace("app");

@Component({
  components: {
    Hamburger,
    Breadcrumb
  }
})
export default class NavBar extends Vue {
  @appModule.Mutation
  private toggleSidebar!: () => void;
  @Getter("sidebarOpen")
  private sidebarOpen!: boolean;

  private handleToggleHamburger() {
    this.toggleSidebar();
  }
}
</script>

<style lang="scss" scoped>
@import "navbar";
</style>
