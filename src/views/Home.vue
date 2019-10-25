<template>
  <div class="home">
    <ve-line :data="chartData"></ve-line>
    <el-button @click="handleClick">改变权限</el-button>
    <div v-permission:some="['user']">user</div>
    <div v-permission:all="['admin', 'user']">admin</div>
    <div>permissions: {{permissions.join(",")}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

const userModule = namespace("user");

@Component({
  components: {}
})
export default class Home extends Vue {
  @userModule.State("permissions")
  private permissions!: string[];
  @userModule.Mutation("setPermissions")
  private setPermissions!: (permissions: any[]) => void

  private chartData: any = {
    columns: ["date", "PV"],
    rows: [
      { date: "01-01", PV: 1231 },
      { date: "01-02", PV: 1223 },
      { date: "01-03", PV: 2123 },
      { date: "01-04", PV: 4123 },
      { date: "01-05", PV: 3123 },
      { date: "01-06", PV: 7123 }
    ]
  };

  private handleClick() {
    this.setPermissions(["admin", "user"])
  }
}
</script>
