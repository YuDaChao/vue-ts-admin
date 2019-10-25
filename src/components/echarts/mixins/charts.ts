import { Vue, Component, Prop } from "vue-property-decorator";
import isEmpty from "lodash/isEmpty";
import { IChartData } from "../types";

@Component
export default class ChartsMixin extends Vue {
  @Prop()
  private readonly chartData!: IChartData;
  @Prop()
  private readonly chartSettings?: () => {};
  @Prop()
  private readonly extend?: () => {};
  @Prop()
  private readonly loading?: boolean;

  private get isDateEmpty(): boolean {
    if (!this.chartData) {
      return true
    }
    return isEmpty(this.chartData.rows)
  }
}
