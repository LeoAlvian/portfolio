import { createApp } from 'vue'
import App from './App.vue'

// Icons 
import Unicon from 'vue-unicons'
import { uniInstagram, uniGithubAlt, uniLinkedinAlt, uniExternalLinkAlt, uniAngleRight, uniAngleDoubleRight, uniFacebookF, uniAt, uniEnvelope, uniAngleDoubleRightMonochrome, uniVuejsMonochrome } from 'vue-unicons/dist/icons'
Unicon.add([uniInstagram, uniGithubAlt, uniLinkedinAlt, uniExternalLinkAlt, uniAngleRight, uniAngleDoubleRight, uniFacebookF, uniAt, uniEnvelope, uniAngleDoubleRightMonochrome, uniVuejsMonochrome])

import { FontAwesomeIcon } from "@/plugins/fontawesome";

createApp(App).component('fa', FontAwesomeIcon).use(Unicon).mount('#app')