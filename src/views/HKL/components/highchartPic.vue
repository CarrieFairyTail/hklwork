<template>
  <div id="hightchartPic">
    <div class="highcharts-container"></div>
  </div>
</template>
<script>
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';
HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);

export default {
  name: 'hightchartPic',
  data() {
    return {
      chart: null,
      options: {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
      }
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      console.log(this.$el);
      // this.$el.style.width = (this.styles.width || 800) + 'px';
      // this.$el.style.height = (this.styles.height || 400) + 'px';
      this.chart = new Highcharts.Chart(this.$el, this.options);
    }
  }
}
</script>
<style lang="stylus" scoped>
  .highcharts-container {
    width: 800px;
    height: 400px;
  }
</style>