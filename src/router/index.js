import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Article from '../views/Article.vue';
import Town from '../views/Town.vue';

const routes = [
  { path: '/', component: Home }, // 首页
  { path: '/article', component: Article }, // 文章详情页
  { path: '/town', component: Town },  // 黄花之乡页面
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
