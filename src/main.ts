import "./assets/main.css"

import { createApp } from "vue"
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'
import HelloWorld from "./Helloworld.vue"
const app = createApp(HelloWorld)

// app.use(createPinia())
// app.use(router)

app.mount("#app")
