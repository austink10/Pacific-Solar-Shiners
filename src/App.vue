<template>
  <div class="app">
    <header class="header">
      <div class="container">
        <div class="header-content">
          <router-link to="/" class="logo">
            <h1>Pacific Solar Shiners</h1>
          </router-link>
          <nav class="nav">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/about" class="nav-link">About</router-link>
            <router-link to="/services" class="nav-link">Services</router-link>
            <router-link to="/projects" class="nav-link">Projects</router-link>
            <router-link to="/case-studies" class="nav-link">Case Studies</router-link>
            <router-link to="/partnerships" class="nav-link">Partnerships</router-link>
          </nav>
          <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <nav class="mobile-nav" :class="{ 'is-open': isMobileMenuOpen }">
          <router-link to="/" class="nav-link" @click="closeMobileMenu">Home</router-link>
          <router-link to="/about" class="nav-link" @click="closeMobileMenu">About</router-link>
          <router-link to="/services" class="nav-link" @click="closeMobileMenu">Services</router-link>
          <router-link to="/projects" class="nav-link" @click="closeMobileMenu">Projects</router-link>
          <router-link to="/case-studies" class="nav-link" @click="closeMobileMenu">Case Studies</router-link>
          <router-link to="/partnerships" class="nav-link" @click="closeMobileMenu">Partnerships</router-link>
        </nav>
      </div>
    </header>

    <main class="main">
      <router-view />
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} Pacific Solar Shiners. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.header {
  background: var(--bg-dark);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: 700;
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
}

/* Footer */
.footer {
  background: var(--bg-dark);
  color: var(--white);
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }
}
</style>

