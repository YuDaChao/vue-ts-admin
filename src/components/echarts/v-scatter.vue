<template>
  <div class="v-scatter">
    <ve-scatter
      ref="chart"
      :data="chartData"
      :settings="chartSettings"
      :extend="extend"
      :loading="loading"
      :data-empty="isDateEmpty"
      v-bind="$attrs"
    ></ve-scatter>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ResizeMixins, ChartsMixins } from "./mixins";

@Component({
  mixins: [ResizeMixins, ChartsMixins]
})
export default class VScatter extends Vue {
}
</script>


