import { createApp } from 'vue'
import './style.css'
import elementPlus from 'element-plus';
import VueRouter from '@/router'
import App from './App.vue';
import "swiper/css";
import 'element-plus/dist/index.css';
import '@/assets/css/display.css';

createApp(App).use(elementPlus).use(VueRouter).mount('#app');
