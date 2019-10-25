<template>
  <div class="home">
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {
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
}
</script>
