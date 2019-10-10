import Vue from 'vue';
import ElementUI from 'element-ui';
import SvgIcon from 'vue-svgicon';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/styles/index.scss';

import App from './App.vue';
import router from './router/index';
import store from './store/index';

import './icons/components';

Vue.use(ElementUI);
Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em',
})
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
