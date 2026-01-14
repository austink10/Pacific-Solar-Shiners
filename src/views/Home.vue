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
          <img src="/images/logos/PSS-Logo.png" alt="Pacific Solar Shiners" class="hero-logo" />
          <p class="hero-description">
            Maximize your solar panel efficiency and reduce utility costs with our expert cleaning services. 
            Serving residential and commercial properties throughout the Pacific region.
          </p>
          <button class="cta-button" @click="openPricingModal">Get Pricing</button>
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
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 191, 0, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), var(--glow-orange);
}

.hero-logo {
  max-width: 500px;
  width: 100%;
  height: auto;
  margin: 0 auto 1.5rem;
  display: block;
  background: transparent;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.8;
  opacity: 0.9;
}

.cta-button {
  background: linear-gradient(135deg, var(--primary-color) 0%, #FFD700 100%);
  color: var(--bg-dark);
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(255, 191, 0, 0.4), var(--glow-orange);
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.cta-button:hover::before {
  left: 100%;
}

.cta-button:hover {
  background: linear-gradient(135deg, #FFD700 0%, var(--primary-color) 100%);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(255, 191, 0, 0.6), var(--glow-orange);
}

.cta-button:active {
  transform: translateY(0);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  background: linear-gradient(135deg, var(--white) 0%, var(--primary-color) 50%, var(--secondary-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
  font-weight: 700;
  animation: gradientShift 3s ease infinite;
  background-size: 200% 200%;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
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
  background: rgba(26, 26, 26, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 191, 0, 0.2);
  border-left: 4px solid var(--primary-color);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.service-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, var(--primary-color), var(--secondary-color));
  opacity: 0;
  transition: opacity 0.4s;
}

.service-item:hover::before {
  opacity: 1;
}

.service-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 191, 0, 0.2);
  border-color: rgba(255, 191, 0, 0.4);
  background: rgba(26, 26, 26, 0.8);
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

  .hero-logo {
    max-width: 350px;
  }

  .hero-description {
    font-size: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

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

