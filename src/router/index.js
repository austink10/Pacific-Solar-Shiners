import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import ServiceDetail from '../views/ServiceDetail.vue'
import Projects from '../views/Projects.vue'
import CaseStudies from '../views/CaseStudies.vue'
import Partnerships from '../views/Partnerships.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/services', name: 'services', component: Services },
  { path: '/services/:slug', name: 'service-detail', component: ServiceDetail },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/case-studies', name: 'case-studies', component: CaseStudies },
  { path: '/partnerships', name: 'partnerships', component: Partnerships }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top on route change
    // Ignore saved position to prevent retaining scroll position
    return { top: 0, left: 0, behavior: 'instant' }
  }
})

// Ensure scroll to top on every navigation
router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router

