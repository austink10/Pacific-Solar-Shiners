<template>
  <div class="services-page">
    <section 
      v-for="(service, index) in services" 
      :key="index"
      :ref="el => setSectionRef(el, index)"
      class="service-section"
      :class="{ 'fade-in': visibleSections[index], 'align-left': index % 2 === 0, 'align-right': index % 2 === 1 }"
      :style="{ backgroundImage: `url(${service.image})` }"
    >
      <div class="service-content">
        <h2 class="service-title">{{ service.title }}</h2>
        <p class="service-description">{{ service.description }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const services = ref([
  {
    title: 'Panel Cleaning',
    description: 'Professional solar panel cleaning service to maximize your energy efficiency and protect your investment.',
    image: '/images/services/panel-cleaning.jpg'
  },
  {
    title: 'Automated Solar Wash Installation',
    description: 'Installation of automated solar panel cleaning systems for hands-free maintenance and optimal performance.',
    image: '/images/services/automated-wash.jpeg'
  },
  {
    title: 'Gutter Cleaning',
    description: 'Comprehensive gutter cleaning services to prevent debris buildup and protect your property.',
    image: '/images/services/gutter-cleaning.jpeg'
  },
  {
    title: 'Roof Cleaning',
    description: 'Expert roof cleaning services to maintain your property\'s appearance and structural integrity.',
    image: '/images/services/roof-cleaning.jpeg'
  }
])

const sectionRefs = ref({})
const visibleSections = ref([false, false, false, false])
let observers = []

const setSectionRef = (el, index) => {
  if (el) {
    sectionRefs.value[index] = el
  }
}

const setupIntersectionObserver = () => {
  services.value.forEach((service, index) => {
    const section = sectionRefs.value[index]
    if (!section) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.value[index] = true
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    )
    
    observer.observe(section)
    observers.push(observer)
  })
}

onMounted(async () => {
  await nextTick()
  setupIntersectionObserver()
})

onUnmounted(() => {
  observers.forEach(observer => observer.disconnect())
})
</script>

<style scoped>
.services-page {
  width: 100%;
  overflow-x: hidden;
}

.service-section {
  width: 100vw;
  min-height: 65vh;
  position: relative;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--bg-dark);
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.service-section.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.service-content {
  max-width: 600px;
  padding: 4rem 6rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  margin: 0 6rem;
}

.service-section.align-left .service-content {
  margin-left: 6rem;
  margin-right: auto;
}

.service-section.align-right .service-content {
  margin-left: auto;
  margin-right: 6rem;
}

.service-title {
  color: var(--white);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.service-description {
  color: var(--text-light);
  font-size: 1.2rem;
  line-height: 1.8;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

@media (max-width: 1024px) {
  .service-content {
    padding: 3rem 4rem;
    margin: 0 4rem;
  }

  .service-section.align-left .service-content,
  .service-section.align-right .service-content {
    margin-left: 4rem;
    margin-right: 4rem;
  }

  .service-title {
    font-size: 2.5rem;
  }

  .service-description {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .service-section {
    min-height: 60vh;
  }

  .service-content {
    padding: 2.5rem;
    margin: 0 2rem;
    max-width: 100%;
  }

  .service-section.align-left .service-content,
  .service-section.align-right .service-content {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .service-title {
    font-size: 2rem;
  }

  .service-description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .service-content {
    padding: 2rem;
    margin: 0 1rem;
  }

  .service-section.align-left .service-content,
  .service-section.align-right .service-content {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .service-title {
    font-size: 1.75rem;
  }
}
</style>
