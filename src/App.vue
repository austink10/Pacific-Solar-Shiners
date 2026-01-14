<template>
  <div class="app">
    <ParticleBackground />
    <header class="header">
      <div class="container">
        <div class="header-content">
          <router-link to="/" class="logo">
            <img src="/images/logos/PSS-Logo-Horizontal.png" alt="Pacific Solar Shiners" class="logo-image" />
          </router-link>
          <nav class="nav">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/services" class="nav-link">Services</router-link>
            <router-link to="/projects" class="nav-link">Projects</router-link>
            <router-link to="/case-studies" class="nav-link">Case Studies</router-link>
            <router-link to="/partnerships" class="nav-link">Partnerships</router-link>
            <router-link to="/about" class="nav-link">About</router-link>
          </nav>
          <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <nav class="mobile-nav" :class="{ 'is-open': isMobileMenuOpen }">
          <router-link to="/" class="nav-link" @click="closeMobileMenu">Home</router-link>
          <router-link to="/services" class="nav-link" @click="closeMobileMenu">Services</router-link>
          <router-link to="/projects" class="nav-link" @click="closeMobileMenu">Projects</router-link>
          <router-link to="/case-studies" class="nav-link" @click="closeMobileMenu">Case Studies</router-link>
          <router-link to="/partnerships" class="nav-link" @click="closeMobileMenu">Partnerships</router-link>
          <router-link to="/about" class="nav-link" @click="closeMobileMenu">About</router-link>
        </nav>
      </div>
    </header>

    <main class="main">
      <router-view />
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-left">
            <img src="/images/logos/PSS-Logo-Side-by-Side.png" alt="Pacific Solar Shiners" class="footer-logo" />
          </div>
          <div class="footer-right">
            <h3 class="footer-heading">Contact</h3>
            <ul class="footer-contact-list">
              <li class="footer-contact-item">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                </svg>
                <a href="tel:619-320-8425">619-320-8425</a>
              </li>
              <li class="footer-contact-item">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
                <a href="mailto:contact@pacificsolarshiners.com">contact@pacificsolarshiners.com</a>
              </li>
              <li class="footer-contact-item">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
                <span>San Diego County, CA</span>
              </li>
              <li class="footer-contact-item">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                </svg>
                <span>Licensed & Insured</span>
              </li>
            </ul>
          </div>
        </div>
        <p class="footer-copyright">&copy; {{ new Date().getFullYear() }} Pacific Solar Shiners. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ParticleBackground from './components/ParticleBackground.vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #FFBF00;
  --secondary-color: #0090FF;
  --accent-color: #004F9F;
  --text-dark: #FFFFFF;
  --text-light: #CCCCCC;
  --bg-light: #1A1A1A;
  --bg-dark: #000000;
  --white: #FFFFFF;
  --shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 4px 20px rgba(0, 0, 0, 0.7);
  --glow-orange: 0 0 20px rgba(255, 191, 0, 0.4), 0 0 40px rgba(255, 191, 0, 0.2);
  --glow-blue: 0 0 20px rgba(0, 144, 255, 0.4), 0 0 40px rgba(0, 144, 255, 0.2);
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: var(--text-dark);
  background-color: var(--bg-dark);
  line-height: 1.6;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-dark);
  position: relative;
}

.app::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 191, 0, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(0, 144, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(0, 79, 159, 0.03) 0%, transparent 50%);
  animation: gradientMove 20s ease infinite;
  pointer-events: none;
  z-index: 0;
}

@keyframes gradientMove {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.header {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 191, 0, 0.2);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  text-decoration: none;
  color: var(--white);
  display: flex;
  align-items: center;
}

.logo-image {
  height: 40px;
  width: auto;
  max-width: 200px;
  object-fit: contain;
  background: transparent;
  display: block;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--white);
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link.router-link-active {
  color: var(--primary-color);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-color);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--white);
  transition: all 0.3s;
}

.mobile-nav {
  display: none;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav.is-open {
  display: flex;
}

/* Main */
.main {
  flex: 1;
  position: relative;
  z-index: 2;
}

/* Footer */
.footer {
  background: rgba(42, 42, 42, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: var(--white);
  padding: 3rem 0 1.5rem;
  border-top: 1px solid rgba(255, 191, 0, 0.2);
  position: relative;
  z-index: 2;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 2rem;
}

.footer-left {
  display: flex;
  align-items: center;
}

.footer-logo {
  max-width: 250px;
  width: 100%;
  height: auto;
  background: transparent;
}

.footer-right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-heading {
  color: var(--white);
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.25rem 0;
}

.footer-contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-light);
  font-size: 1.15rem;
  line-height: 1.6;
}

.contact-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  color: var(--primary-color);
}

.footer-contact-item a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-contact-item a:hover {
  color: var(--white);
}

.footer-contact-item span {
  color: var(--text-light);
}

.footer-copyright {
  text-align: center;
  color: var(--text-light);
  font-size: 1.05rem;
  margin: 0;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 0 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .footer-left {
    justify-content: center;
  }

  .footer-logo {
    max-width: 200px;
  }

  .footer-right {
    align-items: center;
  }

  .footer-heading {
    font-size: 1.75rem;
  }

  .footer-contact-item {
    font-size: 1.05rem;
  }

  .footer-copyright {
    font-size: 1rem;
  }

  .contact-icon {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .logo-image {
    height: 32px;
    max-width: 160px;
  }
}

@media (max-width: 480px) {
  .logo-image {
    height: 28px;
    max-width: 140px;
  }
}
</style>

