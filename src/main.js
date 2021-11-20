import { createApp } from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from "@/plugins/fontawesome";

createApp(App).component('fa', FontAwesomeIcon).mount('#app')