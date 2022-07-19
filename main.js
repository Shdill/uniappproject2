import Vue from 'vue'
import App from './App'
import {myRequest} from '@/pages/util/api.js'

Vue.prototype.$myRequest = myRequest

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
