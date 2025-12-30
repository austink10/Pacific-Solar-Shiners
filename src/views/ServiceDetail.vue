<template>
  <div class="service-detail">
    <router-link to="/services" class="back-link">← Back to Services</router-link>
    
    <div class="service-detail-container">
      <div class="service-header">
        <h1 class="service-detail-title">{{ serviceData?.title }}</h1>
      </div>

      <div class="service-detail-content">
        <div class="service-image">
          <img 
            v-if="serviceData?.image" 
            :src="serviceData.image" 
            :alt="serviceData.title"
            @error="handleImageError"
          />
        </div>

        <div class="service-info">
          <p class="service-intro">{{ serviceData?.description }}</p>
          
          <div class="service-details">
            <p>Detailed information about {{ serviceData?.title }} will be added here.</p>
            <p>This page provides comprehensive details about our {{ serviceData?.title.toLowerCase() }} service, including:</p>
            <ul>
              <li>Service overview and benefits</li>
              <li>Process and methodology</li>
              <li>What to expect</li>
              <li>Pricing information</li>
              <li>Frequently asked questions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const services = [
  {
    title: 'Panel Cleaning',
    description: 'Professional solar panel cleaning service to maximize your energy efficiency and protect your investment.',
    image: '/images/services/panel-cleaning.jpg',
    slug: 'panel-cleaning'
  },
  {
    title: 'Automated Solar Wash Installation',
    description: 'Installation of automated solar panel cleaning systems for hands-free maintenance and optimal performance.',
    image: '/images/services/automated-wash.jpeg',
    slug: 'automated-solar-wash-installation'
  },
  {
    title: 'Gutter Cleaning',
    description: 'Comprehensive gutter cleaning services to prevent debris buildup and protect your property.',
    image: '/images/services/gutter-cleaning.jpeg',
    slug: 'gutter-cleaning'
  },
  {
    title: 'Roof Cleaning',
    description: 'Expert roof cleaning services to maintain your property\'s appearance and structural integrity.',
    image: '/images/services/roof-cleaning.jpeg',
    slug: 'roof-cleaning'
  }
]

const serviceData = computed(() => {
  const slug = route.params.slug
  return services.find(service => service.slug === slug)
})

const handleImageError = (event) => {
  event.target.style.display = 'none'
}

onMounted(() => {
  if (!serviceData.value) {
    // Redirect to services page if service not found
    router.push('/services')
  }
})
</script>

<style scoped>
.service-detail {
  min-height: calc(100vh - 200px);
  background: var(--bg-dark);
  padding: 4rem 0;
  position: relative;
}

.service-detail-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  padding-top: 3.5rem;
}

.back-link {
  position: fixed;
  top: 80px;
  left: 2rem;
  z-index: 100;
  display: inline-block;
  color: var(--primary-color);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: var(--white);
}

.service-header {
  margin-bottom: 3rem;
}

.service-detail-title {
  color: var(--white);
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
}

.service-detail-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.service-image {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.service-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.service-info {
  color: var(--text-light);
}

.service-intro {
  font-size: 1.25rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--white);
  font-weight: 500;
}

.service-details {
  font-size: 1.05rem;
  line-height: 1.8;
}

.service-details p {
  margin-bottom: 1rem;
}

.service-details ul {
  margin: 1.5rem 0;
  padding-left: 1.5rem;
}

.service-details li {
  margin-bottom: 0.75rem;
  color: var(--text-light);
}

@media (max-width: 1024px) {
  .service-detail-content {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .service-detail {
    padding: 2rem 0;
  }

  .service-detail-container {
    padding: 0 1rem;
    padding-top: 3rem;
  }

  .back-link {
    top: 70px;
    left: 1rem;
    font-size: 0.9rem;
  }

  .service-detail-title {
    font-size: 2rem;
  }

  .service-detail-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .service-intro {
    font-size: 1.1rem;
  }
}
</style>
