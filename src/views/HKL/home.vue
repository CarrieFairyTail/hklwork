<template>
  <div id="home">
    <el-carousel type="card" height="400px">
      <el-carousel-item>
        <div><img src="../../plugins/images/yun.jpg" height="400px" alt=""></div>
      </el-carousel-item>
      <el-carousel-item>
        <div><img src="../../plugins/images/zhuo.jpg" height="400px" alt=""></div>
      </el-carousel-item>
      <el-carousel-item>
        <div><img src="../../plugins/images/zhuo.jpg" height="400px" alt=""></div>
      </el-carousel-item>
    </el-carousel>
    <!-- <div class="home-mid">
      <div>项目</div>
      <div>账单</div>
      <div>更多</div>
    </div> -->
    <!-- 使用swiper -->
    <swiper-text></swiper-text>
    <!-- 使用highcharts图表 -->
    <highchart-pic></highchart-pic>
    <!-- {{time | momentTime('YYYY年MM月DD日')}} -->
    {{time}}
    <div>
      <el-radio-group v-model="language" size="mini">
        <el-radio v-for="(item, i) of lang" :key="i" :label="item.value" border>{{item.label}}</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
  import SwiperText from './components/swiperText'
  import HighchartPic from './components/highchartPic'
  import Vue from 'vue'

  export default {
    name: "home",
    data() {
      return{
        time: new Date(),
        language: 0,
        lang: [{
          label: this.$t('message.zh'),       //模板语法的一种
          value: 0
        }, {
          label: this.$t('message.en'),
          value: 1
        }]
      }
    },
    mounted() {
      this.time = this.$moment().format("YYYY-DD-MM")
      this.$i18n.locale === 'zh' ? this.language = 0 : this.language = 1   //数据加载时判断当前属于哪种语言，为其单选按钮赋值
    },
    watch: {    //侦听器
      language: function (val) {       //侦听单选按钮的变化，从而进行切换语言
        val === 0 ? this.$i18n.locale = 'zh' : this.$i18n.locale = 'en';
        Vue.set(this.lang, 0, {label: this.$t('message.zh'), value: 0});
        Vue.set(this.lang, 1, {label: this.$t('message.en'), value: 1})
        /**
        this.lang: [{
          label: this.$t('message.zh'),       //如果不使用Vue.set，也可以使用更新数据的方法
          value: 0
        }, {
          label: this.$t('message.en'),
          value: 1
        }]
        **/
      }
    },
    components: {
      SwiperText,
      HighchartPic
    }
  }
</script>

<style lang="stylus" scoped>
  .el-carousel__item
    div
      text-align center
  .home-mid
    display flex
    justify-content space-between
    div
      width 30%
      height 200px
      line-height 200px
      text-align center
      border 1px solid #cccccc
      border-radius 20px
      box-shadow 4px 4px 10px #cccccc
      color wheat
      font-size 40px
      background-color #09315B
      cursor pointer
    div:hover
      opacity 70%
</style>