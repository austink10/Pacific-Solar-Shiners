<template>
  <div class="home">
    <section class="hero" ref="heroSection">
      <div class="hero-slideshow" :class="{ paused: !isHeroVisible }">
        <div class="slideshow-track">
          <div 
            v-for="(image, index) in [...slideshowImages, ...slideshowImages]" 
            :key="`slide-${index}`"
            class="slide"
          >
            <img 
              :src="image" 
              :alt="`Slide ${(index % slideshowImages.length) + 1}`"
              @error="handleImageError"
              loading="lazy"
            />
          </div>
        </div>
        <div class="hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Pacific Solar Shiners</h1>
          <p class="hero-subtitle">Professional Solar Panel Cleaning Services</p>
          <p class="hero-description">
            Maximize your solar panel efficiency and reduce utility costs with our expert cleaning services. 
            Serving residential and commercial properties throughout the Pacific region.
          </p>
          <button class="cta-button" @click="openPricingModal">Get Pricing</button>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2 class="section-title">Why Choose Us?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Increased Efficiency</h3>
            <p>Clean panels can increase energy output by up to 30%</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>Save Money</h3>
            <p>Lower utility bills through improved solar performance</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏆</div>
            <h3>Expert Service</h3>
            <p>Professional cleaning with years of experience</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌱</div>
            <h3>Eco-Friendly</h3>
            <p>Safe, environmentally responsible cleaning methods</p>
          </div>
        </div>
      </div>
    </section>

    <section class="services">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <div class="services-content">
          <div class="service-item">
            <h3>Residential Cleaning</h3>
            <p>Keep your home solar panels operating at peak efficiency with our residential cleaning services.</p>
          </div>
          <div class="service-item">
            <h3>Commercial Cleaning</h3>
            <p>Large-scale solar installations require specialized care. We handle commercial projects of any size.</p>
          </div>
          <div class="service-item">
            <h3>Maintenance Programs</h3>
            <p>Regular cleaning schedules to ensure your panels stay clean and efficient year-round.</p>
          </div>
        </div>
      </div>
    </section>

    <PricingModal :isOpen="isPricingModalOpen" @close="closePricingModal" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import PricingModal from '../components/PricingModal.vue'

const isPricingModalOpen = ref(false)
const heroSection = ref(null)
const isHeroVisible = ref(true)
const observer = ref(null)

// Images from /images/hero-slideshow/ directory
const slideshowImages = ref([
  '/images/hero-slideshow/slide1.jpg',
  '/images/hero-slideshow/slide2.jpg',
  '/images/hero-slideshow/slide3.jpg',
  '/images/hero-slideshow/slide4.jpg',
  '/images/hero-slideshow/slide5.jpg',
  '/images/hero-slideshow/slide6.jpg',
  '/images/hero-slideshow/slide7.jpg',
  '/images/hero-slideshow/slide8.jpg',
  '/images/hero-slideshow/slide9.jpg'
])

const openPricingModal = () => {
  isPricingModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closePricingModal = () => {
  isPricingModalOpen.value = false
  document.body.style.overflow = ''
}

const handleImageError = (event) => {
  // Hide the image if it fails to load
  event.target.style.display = 'none'
}

// Intersection Observer to detect when hero section is in view
onMounted(() => {
  if (heroSection.value) {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isHeroVisible.value = entry.isIntersecting
        })
      },
      {
        threshold: 0.1 // Trigger when 10% of hero is visible
      }
    )
    observer.value.observe(heroSection.value)
  }
})

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})
</script>

<style scoped>
.home {
  min-height: calc(100vh - 200px);
}

.hero {
  position: relative;
  color: var(--white);
  padding: 6rem 0;
  text-align: center;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-slideshow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.slideshow-track {
  display: flex;
  width: fit-content;
  height: 100%;
  animation: scroll 90s linear infinite;
  will-change: transform;
}

.hero-slideshow.paused .slideshow-track {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.slide {
  flex-shrink: 0;
  width: 100vw;
  height: 100%;
  position: relative;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 79, 159, 0.5) 100%);
  z-index: 1;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  pointer-events: auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  opacity: 0.95;
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.8;
  opacity: 0.9;
}

.cta-button {
  background: var(--primary-color);
  color: var(--bg-dark);
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(255, 191, 0, 0.4);
}

.cta-button:hover {
  background: #FFD700;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 191, 0, 0.5);
}

.cta-button:active {
  transform: translateY(0);
}

.features {
  padding: 5rem 0;
  background: var(--bg-dark);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--white);
  margin-bottom: 3rem;
  font-weight: 700;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--bg-light);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--shadow);
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: var(--white);
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
}

.feature-card p {
  color: var(--text-light);
  line-height: 1.6;
}

.services {
  padding: 5rem 0;
  background: var(--bg-dark);
}

.services-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-item {
  padding: 2rem;
  background: var(--bg-light);
  border-radius: 12px;
  box-shadow: var(--shadow);
  border-left: 4px solid var(--primary-color);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 4px solid var(--primary-color);
}

.service-item h3 {
  color: var(--white);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.service-item p {
  color: var(--text-light);
  line-height: 1.8;
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 0;
    min-height: 500px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .features,
  .services {
    padding: 3rem 0;
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: 400px;
  }
}
</style>

