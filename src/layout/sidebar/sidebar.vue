<template>
  <div class="sidebar" :class="{'has-logo': sidebarOpen}">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :unique-open="false"
        :collapse-transtion="false"
        mode="vertical"
      >
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import { Getter } from 'vuex-class';
  import variables from '@/styles/variables.scss';

  @Component
  export default class Sidebar extends Vue {
    @Getter('sidebarOpen') private sidebarOpen!: boolean

    private get activeMenu(): string {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
    private get isCollapse(): boolean {
      return !this.sidebarOpen
    }
    private get variables(): any {
      return variables
    }
  }
</script>
