import { createApp } from 'vue';
import { createPinia } from 'pinia';
import routers from './routes/index';
import App from './App.vue';
import './index.css';

createApp(App)
  .use(routers)
  .use(createPinia())
  .mount('#app');
