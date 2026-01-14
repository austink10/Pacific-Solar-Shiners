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
    // Special case: Restore scroll position when using browser back button
    // from service detail page to services page
    if (savedPosition && to.name === 'services' && from.name === 'service-detail') {
      return savedPosition
    }
    
    // For all other navigation, always scroll to top
    return { top: 0, left: 0, behavior: 'instant' }
  }
})

// Store scroll position before navigating to service detail from services page
router.beforeEach((to, from) => {
  if (to.name === 'service-detail' && from.name === 'services') {
    // Save current scroll position before navigating to detail page
    sessionStorage.setItem('servicesScrollPosition', window.scrollY.toString())
  }
})

// Handle scroll restoration
router.afterEach((to, from) => {
  // If returning to services page from service detail via back button
  if (to.name === 'services' && from.name === 'service-detail') {
    // Restore saved scroll position
    const savedScroll = sessionStorage.getItem('servicesScrollPosition')
    if (savedScroll) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo({
          top: parseInt(savedScroll, 10),
          left: 0,
          behavior: 'instant'
        })
        sessionStorage.removeItem('servicesScrollPosition')
      })
      return // Don't scroll to top
    }
  }
  
  // For all other navigation, scroll to top
  window.scrollTo(0, 0)
})

export default router

