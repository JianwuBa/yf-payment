// 引入封装好的组件
import bjwTable from "./packageMjDialog/index.vue";
import bjwButton from "./packageButton/index.vue"

const arr = [bjwTable, bjwButton];
const install = (Vue)=> arr.forEach((item) => Vue.component(item.name, item));
export default install; 

