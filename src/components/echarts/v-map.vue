<template>
  <div class="v-line">
    <ve-map
      ref="chart"
      :data="chartData"
      :settings="chartSettings"
      :extend="extend"
      :loading="loading"
      :data-empty="isDateEmpty"
      v-bind="$attrs"
    >
    </ve-map>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ResizeMixins, ChartsMixins } from "./mixins";

@Component({
  mixins: [ResizeMixins, ChartsMixins]
})
export default class VMap extends Vue {
}
</script>


