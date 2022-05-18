import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHatWizard)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../node_modules/bootstrap/js/dist/collapse.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
