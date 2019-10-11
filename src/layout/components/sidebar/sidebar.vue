<template>
  <div class="sidebar" :class="{'has-logo': sidebarOpen}">
    <sidebar-logo :collapse="isCollapse"></sidebar-logo>
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
        <sidebar-item
            v-for="menu in menuList"
            :key="menu.path"
            :menu="menu"
            :base-path="menu.path"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'
  import {Getter} from 'vuex-class'
  import SidebarLogo from './sidebar-logo.vue'
  import SidebarItem from './sidebar-item.vue'
  import {IRouterConfig} from '@/router/types'
  import variables from '@/assets/styles/variables.scss'

  @Component({
    components: {
      SidebarLogo,
      SidebarItem,
    },
  })
  export default class Sidebar extends Vue {
    @Getter('sidebarOpen') private sidebarOpen!: boolean
    @Getter('menuList') private menuList!: IRouterConfig[]

    // private get menuList(): IRouterConfig[] {
    //   console.log(this.$router)
    //   return this.$router.options.routes
    // }

    private get activeMenu(): string {
      const route = this.$route
      const {meta, path} = route
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
