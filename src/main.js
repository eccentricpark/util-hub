import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TextConvert from "@/views/text-convert.vue"
import MyProfile from "@/views/my-profile.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/',
      name: 'text-convert',
      component: TextConvert
    },
    { 
      path: '/my-profile',
      name: 'my-profile',
      component: MyProfile
    }
  ]
});

createApp(App)
  .use(router)  
  .mount('#app')
  
