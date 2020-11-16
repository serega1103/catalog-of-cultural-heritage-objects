import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'

// Раньше для сборки нужно было импортировать styles.scss,
// сейчас styles.scss импортируется автоматически.
// Раньше: import './assets/styles/styles.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
