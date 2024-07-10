import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App.vue'
import home from '@/pages/home.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    linkActiveClass: 'nav-active',
    scrollBehavior(to) {
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth'
        };
      }
    },
    routes: [
      {
        path: '',
        component: App,
        children: [
          {
            path: '',
            component: home,
            name: 'home'
          }
        ]
      }
    ],
  })
}
