<template>
  <div class="app-wrapper" :class="sidebarCls">
    <!--侧边栏-->
    <side-bar class="sidebar-container"></side-bar>
    <div class="main-container">
      <div class="nav-bar">
        <nav-bar></nav-bar>
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {Getter} from 'vuex-class';
  import AppMain from './components/app-main.vue'
  import SideBar from './components/sidebar/sidebar.vue'
  import NavBar from './components/navbar/navbar.vue'

  @Component({
    components: {
      AppMain,
      SideBar,
      NavBar,
    },
  })
  export default class Index extends Vue {
    @Getter('sidebarOpen') private sidebarOpen!: boolean
    private get sidebarCls(): object {
      return {
        hideSidebar: !this.sidebarOpen,
        openSidebar: this.sidebarOpen,
      }
    }
  }
</script>
