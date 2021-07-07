<template>
  <div id="yearEcharts">
    <div id="innerViewYear"></div>
  </div>
</template>

<script>
  import Echarts from 'echarts/lib/echarts'
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/title'
  export default {
    name: "yearEcharts",
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.initView()
    },
    methods: {
      // 图表
      initView() {
        // this.chart = Echarts.init(document.getElementById('innerViewYear'))
        // this.chart.setOption(this.viewOption)
        var dom = document.getElementById("innerViewYear");
        this.chart = Echarts.init(dom);
        var option = null;

        var xAxisData = []; // 横轴名称
        // 每组数据
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];
        var data5 = [];
        var data6 = [];

        // 这里循环了十组数据，数据内容随机，取两位小数
        for (var i = 0; i < 10; i++) {
            xAxisData.push(i); // 横轴命名
            data1.push((Math.random() * 2).toFixed(2));
            data2.push(-Math.random().toFixed(2));
            data3.push((Math.random() * 5).toFixed(2));
            data4.push((Math.random() + 0.3).toFixed(2));
            data5.push((Math.random() * 2).toFixed(2));
            data6.push(-Math.random().toFixed(2));
        }

        // 每一条柱状图的样式
        var itemStyle = {
          normal: {
          },
          emphasis: {
              barBorderWidth: 10,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: '#ccc'
          }
        };

        option = {
            backgroundColor: '',
            
            //图例组件 （最上边图例和文本）
            legend:{
                data: ['支出', '收入', '差价'],
                align: 'right', // 图例与文本的对齐方式
                orient: 'vertical',
                right: 0,
                y: 'center', // 在y轴方向居中展示
                itemWidth: 14, // 高默认是14
            },
            
            // 提示框组件(默认为true)
            tooltip: {
                show: true
            },
            // x轴
            xAxis: {
                data: xAxisData,
                silent: false, //坐标轴是否是静态无法交互
                axisLine: {onZero: true},
                // 坐标轴轴线相关设置
                splitLine: {show: false},
                splitArea: {
                    show: false
                }
            },
            // y轴
            yAxis: {
                inverse: false, // 是否为反向坐标轴（默认false）
                splitArea: {show: false}
            },
            // 最外层容器
            grid: {
                left: 50
            },
            
            // 系列列表
            // stack同个类目上堆叠
            series: [
                {
                    name: '支出',
                    type: 'bar',
                    stack: 'one',
                    barWidth: 10, // 柱状宽度（一个类目 下设置一个即可one/two）
                    barGap: '-0', // 柱状间距
                    itemStyle: itemStyle,
                    data: data1
                },
                {
                    name: '收入',
                    type: 'bar',
                    stack: 'one',
                    itemStyle: itemStyle,
                    data: data2
                },
                {
                    name: '差价',
                    type: 'bar',
                    stack: 'one',
                    itemStyle: itemStyle,
                    data: data3
                },
                {
                    name: '较大-存量',
                    type: 'bar',
                    stack: 'two',
                    barWidth: 10,
                    itemStyle: itemStyle,
                    data: data4
                },
                {
                    name: '较大-新增',
                    type: 'bar',
                    stack: 'two',
                    itemStyle: itemStyle,
                    data: data5
                },
                {
                    name: '较大-完成',
                    type: 'bar',
                    stack: 'two',
                    itemStyle: itemStyle,
                    data: data6
                }
            ]
        };

        this.chart.on('brushSelected', this.renderBrushed);
        if (option && typeof option === "object") {
            this.chart.setOption(option, true);
        }
      },
      renderBrushed(params) {
        var brushed = [];
        var brushComponent = params.batch[0];

        for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
            var rawIndices = brushComponent.selected[sIdx].dataIndex;
            brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
        }

        this.chart.setOption({
            title: {
                backgroundColor: '#333',
                text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
                bottom: 0,
                right: 0,
                width: 100,
                textStyle: {
                    fontSize: 12,
                    color: '#fff'
                }
            }
        });
      }
    }
  }
</script>

<style lang="stylus" scoped>
#yearEcharts
  #innerViewYear
    width 500px
    height calc(100vh - 200px)
</style>