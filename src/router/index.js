import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Page2 from '@/components/Page2.vue'
import Page3 from '@/components/Page3.vue'
import Page4 from '@/components/Page4.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2,
      props: true
    },
    {
      path: '/page3/:id',
      name: 'Page3',
      component: Page3,
      props: true
    },
    {
      path: '/page4',
      name: 'Page4',
      component: Page4,
      props: true
    }
  ]
})
