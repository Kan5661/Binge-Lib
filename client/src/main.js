import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"

// import { OhVueIcon, addIcons } from "oh-vue-icons";
// import { RiSettings3Line, HiUserCircle, OiSearch, MdLocallibraryOutlined } from "oh-vue-icons/icons";

const app = createApp(App)

// addIcons(RiSettings3Line, HiUserCircle, OiSearch, MdLocallibraryOutlined);


const pinia = createPinia()
app.use(router)
app.use(pinia)
// app.component("v-icon", OhVueIcon);

app.mount("#app")
