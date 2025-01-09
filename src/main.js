import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router';
import './assets/global.css'; // 引入全局样式

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount('#app');