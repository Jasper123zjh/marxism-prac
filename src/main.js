import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

 createApp(App).use(router).mount('#app');

//调试
console.log("Vue App Mounted");
