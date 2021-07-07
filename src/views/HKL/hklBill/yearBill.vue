<template>
  <div id="yearBill">
    <div class="year" v-for="(item, i) in yearOptions" :key="i">
      {{item.label}}
      <div>
        <i class="el-icon-circle-plus-outline"></i>
        <i class="el-icon-remove-outline"></i>
      </div>
    </div>
    <year-echarts></year-echarts>
  </div>
</template>

<script>
  import yearEcharts from '../components/echarts/yearEcharts'

  export default {
    name: "yearBill",
    data() {
      return {
        yearOptions: [
          {
            id: '2019',
            value: '2019',
            label: '2019'
          }
        ],
        chart: null
      }
    },
    components: {
      yearEcharts
    },
    mounted() {
    },
    methods: {
    }
  }
</script>

<style lang="stylus" scoped>
#yearBill
  padding 10px 20px
  .year
    width 200px
    height 100px
    border-radius 20px
    box-shadow 4px 4px 10px #cccccc
    font-size 20px
    font-weight 700
    padding 10px
</style>