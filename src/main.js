import { createApp } from 'vue'
import './style.css'
import 'element-plus/dist/index.css';
import elementPlus from 'element-plus';
import VueRouter from '@/router'
import App from './App.vue';
import "swiper/css";

createApp(App).use(elementPlus).use(VueRouter).mount('#app');
