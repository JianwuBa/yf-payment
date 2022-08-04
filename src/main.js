import Vue from 'vue'
import App from './App.vue'
// 引入组件结构
import bjwTable from "bjw-table";
// 引入组件样式
import "bjw-table/bjw-table.css";
// 注册组件到全局
Vue.use(bjwTable);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
