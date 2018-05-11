import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
Vue.config.productionTip = false
import { Button, Input, Tooltip, Poptip } from 'iview';
import 'iview/dist/styles/iview.css';
Vue.component('IButton', Button);
Vue.component('IInput', Input);
Vue.component('Tooltip', Tooltip);
Vue.component('Poptip',Poptip)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
