import Vue from 'vue'
import App from './App.vue'
import router  from "./router"
import {Button,Table,TableColumn,Pagination,Row,Col,Input,Select,Option,Loading,
  Switch,Tooltip,Dialog,Form,FormItem,DatePicker} from "element-ui";
Vue.use(Button)
    .use(Table)
    .use(TableColumn)
    .use(Pagination)
    .use(Row)
    .use(Col)
    .use(Input)
    .use(Select)
    .use(Option)
    .use(Loading)
    .use(Switch)
    .use(Tooltip)
    .use(Dialog)
    .use(Form)
    .use(FormItem)
    .use(DatePicker)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
