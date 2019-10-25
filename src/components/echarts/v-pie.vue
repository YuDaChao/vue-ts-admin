<template>
  <div class="v-line">
    <ve-pie
      ref="chart"
      :data="chartData"
      :settings="chartSettings"
      :extend="extend"
      :loading="loading"
      :data-empty="isDateEmpty"
      v-bind="$attrs"
    >
    </ve-pie>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ResizeMixins, ChartsMixins } from "./mixins";

@Component({
  mixins: [ResizeMixins, ChartsMixins]
})
export default class VPie extends Vue {
}
</script>


