// import "./assets/main.css"
import "./style.css"
import { createApp } from "vue"
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'
// component
// import HelloWorld from "./Helloworld.vue"
// import Jay from "./Jay.vue"
import TodoList from "./TodoList.vue"
const app = createApp(TodoList)

// app.use(createPinia())
// app.use(router)

app.mount("#app")
