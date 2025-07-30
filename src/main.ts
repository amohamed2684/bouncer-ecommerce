import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBasketShopping, faMagnifyingGlass, faSun, faMoon, faChevronLeft, faChevronRight, faAngleRight, faStar, faX, faCircle, faGrip, faList, faCartShopping, faHeart, faFilter, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faUser, faMagnifyingGlass, faBasketShopping, faSun, faMoon, faChevronLeft, faChevronRight, faAngleRight, faStar, faX, faTwitter, faFacebook, faCircle, faGrip, faList, faCartShopping, faHeart, faFilter, faBars, faX, faChevronDown)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
