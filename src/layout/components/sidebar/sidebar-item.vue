<template>
  <div v-if="!menu.hidden" class="menu-wrapper">
    <template
      v-if="hasOneShowingChild(menu.children, menu) && ((!onlyOneChild.children || onlyOneChild.noShowingChildren) || !menu.alwaysShow)"
    >
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item
            :index="resolvePath(onlyOneChild.path)"
            :class="{'submenu-title-noDropdown': !isNest}"
        >
          <svg-icon v-if="onlyOneChild.meta.icon" :name="onlyOneChild.meta.icon || item.meta.icon"></svg-icon>
          <span slot="title">{{ onlyOneChild.meta.title }}</span>
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="resolvePath(menu.path)" popper-append-to-body>
      <template slot="title">
        <svg-icon v-if="menu.meta.icon" :name="menu.meta.icon"></svg-icon>
        <span v-if="menu.meta">{{ menu.meta.title }}</span>
      </template>
      <template v-for="child in menu.children">
        <template v-if="!child.hidden">
          <sidebar-item
              v-if="child.children && child.children.length>0"
              :is-nest="true"
              :item="child"
              :key="child.path"
              :base-path="resolvePath(child.path)"
              class="nest-menu">
          </sidebar-item>
          <app-link v-else :to="resolvePath(child.path)" :key="child.name">
            <el-menu-item :index="resolvePath(child.path)">
              <template v-if="child.meta">
                <svg-icon v-if="child.meta.icon" :name="child.meta.icon"></svg-icon>
                <span slot="title">{{child.meta.title}}</span>
              </template>
            </el-menu-item>
          </app-link>
        </template>
      </template>
    </el-submenu>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator'
  import path from 'path'
  import AppLink from './link.vue';
  import {IRouterConfig} from '@/router/types'
  import {isExternal} from '@/utils/validate'

  @Component({
    components: {
      AppLink,
    },
  })
  export default class SidebarItem extends Vue {
    @Prop({default: {}}) private readonly menu!: IRouterConfig
    @Prop({default: false}) private readonly isNest!: boolean
    @Prop({default: ''}) private readonly basePath!: string

    private onlyOneChild?: IRouterConfig

    private hasOneShowingChild(children: IRouterConfig[] = [], parent: IRouterConfig): boolean {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      if (showingChildren.length === 1) {
        return true
      }
      if (showingChildren.length === 0) {
        this.onlyOneChild = {
          ...parent,
          path: '',
          noShowingChildren: true,
        }
        return true
      }
      return false
    }

    private resolvePath(routePath: string): string {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath || '/', routePath)
    }
  }
</script>
