// import "./assets/main.css"
import "./style.css"
import { createApp } from "vue"
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'
// component
// import HelloWorld from "./Helloworld.vue"
import Jay from "./Jay.vue"
const app = createApp(Jay)
// import TodoList from "./TodoList.vue"
// import Swiper from "./Swiper.vue"
// const app = createApp(Swiper)
// import Multiplication from "./Multiplication.vue"
// const app = createApp(Multiplication)

// app.use(createPinia())
// app.use(router)

app.mount("#app")
