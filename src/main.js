import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import '../src/plugins/style/reset.styl'
// import 'element-ui/lib/theme-chalk/index.css'
import '../src/plugins/element-#09315B/index.css'
// 导入bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
// 引入moment
import moment from 'moment'
Vue.prototype.$moment = moment;//赋值使用
// 引入lodash
import _ from 'lodash'
Vue.prototype._ = _
// 引入i18n 实现中英转换
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

Vue.use(ElementUI)
Vue.config.productionTip = false
// Vue.filter('momentTime',function(data,format){
//   return moment(data).format(format);
// });

/*---------使用语言包-----------*/
const i18n = new VueI18n({
  locale: 'zh',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh': require('./common/lang/zh'),   // 中文语言包
    'en': require('./common/lang/en')    // 英文语言包
  }
})
new Vue({
  router,
  i18n,        //挂载到实例，一定得在这个位置，而不是comonents中
  render: h => h(App)
}).$mount('#app')
