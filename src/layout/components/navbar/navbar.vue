<template>
  <div class="navbar">
    <hamburger
      class="hamburger-container"
      :is-active="sidebarOpen"
      @toggle-click="handleToggleHamburger"
    ></hamburger>
    <!-- 面包屑 -->
    <breadcrumb></breadcrumb>
    <!-- 右边导航菜单 -->
    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item hover-effect">
        <div class="avatar-wrapper">
          <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="user-avatar">
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              个人中心
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
            <el-dropdown-item>
              系统管理
            </el-dropdown-item>
          </a>
          <el-dropdown-item divided>
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
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
