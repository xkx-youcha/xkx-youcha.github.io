import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from '../components/pmBody/about.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '/',
          name: 'about',
          component: () => import('../components/pmBody/about.vue')
        },
        {
          path: '/new',
          name: 'new',
          component: () => import('../components/pmBody/new.vue')
        },
        {
          path: '/award',
          name: 'award',
          component: () => import('../components/pmBody/award.vue')
        },
        // {
        //   path: '/publication',
        //   name: 'publication',
        //   component: () => import('../components/pmBody/publication.vue')
        // },
        {
          path: '/service',
          name: 'service',
          component: () => import('../components/pmBody/service.vue')
        },
        {
          path: '/fund',
          name: 'fund',
          component: () => import('../components/pmBody/fund.vue')
        },
        {
          path: '/team',
          name: 'team',
          component: () => import('../components/pmBody/team.vue')
        },
      ]
    }
  ]
})

export default router
