import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Projects from '../views/Projects.vue'
import CaseStudies from '../views/CaseStudies.vue'
import Partnerships from '../views/Partnerships.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/services', name: 'services', component: Services },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/case-studies', name: 'case-studies', component: CaseStudies },
  { path: '/partnerships', name: 'partnerships', component: Partnerships }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

