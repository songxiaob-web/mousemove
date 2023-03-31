import { createWebHashHistory, createMemoryHistory, createRouter } from 'vue-router';
const routes = [{
  path: '/',
  component: () => import('@/views/home.vue'),
}];


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  console.log({ router })
  console.log({ to, from, next })
  next()
})


export default router

