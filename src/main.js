import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/master.css'
import router from './router'
import store from './store'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFolder, faFileCode, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFolder, faFileCode, faFolderOpen);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router).mount('#app')
