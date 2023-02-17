import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import {Button,MessageBox} from 'element-ui';
import '@/mock/mockServe'
import * as API from '@/api';
import atm from './assets/images/ultraman.gif'
import VueLazyload from 'vue-lazyload'
import myPlugins from './plugins/myPlugins'
Vue.use(myPlugins,{
  name:"upper"
})    
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: errorimage,
  loading: atm,
  // attempt: 1
})
Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name,Pagination)
Vue.component(Button.name,Button)  
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import "@/plugins/validate";
new Vue({ 
  router,
  store,
  render: (h) => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  }
}).$mount('#app')
