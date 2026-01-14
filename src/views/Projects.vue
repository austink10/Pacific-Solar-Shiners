<template>
  <div class="projects">
    <div class="projects-container">
      <div class="tab-buttons">
        <button 
          class="tab-button" 
          :class="{ active: activeTab === 'residential' }"
          @click="activeTab = 'residential'"
        >
          Residential
        </button>
        <button 
          class="tab-button" 
          :class="{ active: activeTab === 'commercial' }"
          @click="activeTab = 'commercial'"
        >
          Commercial
        </button>
      </div>

      <div class="tab-content">
        <transition name="fade" mode="out-in">
          <div v-if="activeTab === 'residential'" key="residential" class="projects-grid">
            <div class="project-container">
              <div class="image-section">
                <div class="image-slot before">
                  <img 
                    v-if="residentialProjects[0]?.beforeImage" 
                    :src="residentialProjects[0].beforeImage" 
                    alt="Before"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>Before</span>
                  </div>
                </div>
                <div class="image-slot after">
                  <img 
                    v-if="residentialProjects[0]?.afterImage" 
                    :src="residentialProjects[0].afterImage" 
                    alt="After"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>After</span>
                  </div>
                </div>
              </div>
              <div class="text-content">
                <div class="location-info">
                  <svg class="location-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                  </svg>
                  <span class="location-text">{{ residentialProjects[0]?.location }}</span>
                </div>
                <p v-if="residentialProjects[0]?.description">{{ residentialProjects[0].description }}</p>
              </div>
            </div>

            <div class="project-container">
              <div class="image-section">
                <div class="image-slot before">
                  <img 
                    v-if="residentialProjects[1]?.beforeImage" 
                    :src="residentialProjects[1].beforeImage" 
                    alt="Before"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>Before</span>
                  </div>
                </div>
                <div class="image-slot after">
                  <img 
                    v-if="residentialProjects[1]?.afterImage" 
                    :src="residentialProjects[1].afterImage" 
                    alt="After"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>After</span>
                  </div>
                </div>
              </div>
              <div class="text-content">
                <div class="location-info">
                  <svg class="location-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                  </svg>
                  <span class="location-text">{{ residentialProjects[1]?.location }}</span>
                </div>
                <p v-if="residentialProjects[1]?.description">{{ residentialProjects[1].description }}</p>
              </div>
            </div>

            <div class="project-container">
              <div class="image-section">
                <div class="image-slot before">
                  <img 
                    v-if="residentialProjects[2]?.beforeImage" 
                    :src="residentialProjects[2].beforeImage" 
                    alt="Before"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>Before</span>
                  </div>
                </div>
                <div class="image-slot after">
                  <img 
                    v-if="residentialProjects[2]?.afterImage" 
                    :src="residentialProjects[2].afterImage" 
                    alt="After"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>After</span>
                  </div>
                </div>
              </div>
              <div class="text-content">
                <div class="location-info">
                  <svg class="location-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                  </svg>
                  <span class="location-text">{{ residentialProjects[2]?.location }}</span>
                </div>
                <p v-if="residentialProjects[2]?.description">{{ residentialProjects[2].description }}</p>
              </div>
            </div>

            <div class="project-container">
              <div class="image-section">
                <div class="image-slot before">
                  <img 
                    v-if="residentialProjects[3]?.beforeImage" 
                    :src="residentialProjects[3].beforeImage" 
                    alt="Before"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>Before</span>
                  </div>
                </div>
                <div class="image-slot after">
                  <img 
                    v-if="residentialProjects[3]?.afterImage" 
                    :src="residentialProjects[3].afterImage" 
                    alt="After"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>After</span>
                  </div>
                </div>
              </div>
              <div class="text-content">
                <div class="location-info">
                  <svg class="location-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                  </svg>
                  <span class="location-text">{{ residentialProjects[3]?.location }}</span>
                </div>
                <p v-if="residentialProjects[3]?.description">{{ residentialProjects[3].description }}</p>
              </div>
            </div>

            <div class="project-container">
              <div class="image-section">
                <div class="image-slot before">
                  <img 
                    v-if="residentialProjects[4]?.beforeImage" 
                    :src="residentialProjects[4].beforeImage" 
                    alt="Before"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>Before</span>
                  </div>
                </div>
                <div class="image-slot after">
                  <img 
                    v-if="residentialProjects[4]?.afterImage" 
                    :src="residentialProjects[4].afterImage" 
                    alt="After"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>After</span>
                  </div>
                </div>
              </div>
              <div class="text-content">
                <div class="location-info">
                  <svg class="location-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                  </svg>
                  <span class="location-text">{{ residentialProjects[4]?.location }}</span>
                </div>
                <p v-if="residentialProjects[4]?.description">{{ residentialProjects[4].description }}</p>
              </div>
            </div>

            <div class="project-container">
              <div class="image-section">
                <div class="image-slot before">
                  <img 
                    v-if="residentialProjects[5]?.beforeImage" 
                    :src="residentialProjects[5].beforeImage" 
                    alt="Before"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>Before</span>
                  </div>
                </div>
                <div class="image-slot after">
                  <img 
                    v-if="residentialProjects[5]?.afterImage" 
                    :src="residentialProjects[5].afterImage" 
                    alt="After"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>After</span>
                  </div>
                </div>
              </div>
              <div class="text-content">
                <div class="location-info">
                  <svg class="location-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                  </svg>
                  <span class="location-text">{{ residentialProjects[5]?.location }}</span>
                </div>
                <p v-if="residentialProjects[5]?.description">{{ residentialProjects[5].description }}</p>
              </div>
            </div>

            <div class="project-container">
              <div class="image-section">
                <div class="image-slot before">
                  <img 
                    v-if="residentialProjects[6]?.beforeImage" 
                    :src="residentialProjects[6].beforeImage" 
                    alt="Before"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>Before</span>
                  </div>
                </div>
                <div class="image-slot after">
                  <img 
                    v-if="residentialProjects[6]?.afterImage" 
                    :src="residentialProjects[6].afterImage" 
                    alt="After"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>After</span>
                  </div>
                </div>
              </div>
              <div class="text-content">
                <div class="location-info">
                  <svg class="location-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                  </svg>
                  <span class="location-text">{{ residentialProjects[6]?.location }}</span>
                </div>
                <p v-if="residentialProjects[6]?.description">{{ residentialProjects[6].description }}</p>
              </div>
            </div>

            <div class="project-container">
              <div class="image-section">
                <div class="image-slot before">
                  <img 
                    v-if="residentialProjects[7]?.beforeImage" 
                    :src="residentialProjects[7].beforeImage" 
                    alt="Before"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>Before</span>
                  </div>
                </div>
                <div class="image-slot after">
                  <img 
                    v-if="residentialProjects[7]?.afterImage" 
                    :src="residentialProjects[7].afterImage" 
                    alt="After"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>After</span>
                  </div>
                </div>
              </div>
              <div class="text-content">
                <div class="location-info">
                  <svg class="location-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                  </svg>
                  <span class="location-text">{{ residentialProjects[7]?.location }}</span>
                </div>
                <p v-if="residentialProjects[7]?.description">{{ residentialProjects[7].description }}</p>
              </div>
            </div>
          </div>

          <div v-else key="commercial" class="projects-grid">
            <div class="project-container">
              <div class="image-section">
                <div class="image-slot before">
                  <img 
                    v-if="commercialProjects[0]?.beforeImage" 
                    :src="commercialProjects[0].beforeImage" 
                    alt="Before"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>Before</span>
                  </div>
                </div>
                <div class="image-slot after">
                  <img 
                    v-if="commercialProjects[0]?.afterImage" 
                    :src="commercialProjects[0].afterImage" 
                    alt="After"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>After</span>
                  </div>
                </div>
              </div>
              <div class="text-content">
                <p v-if="commercialProjects[0]?.description">{{ commercialProjects[0].description }}</p>
              </div>
            </div>

            <div class="project-container">
              <div class="image-section">
                <div class="image-slot before">
                  <img 
                    v-if="commercialProjects[1]?.beforeImage" 
                    :src="commercialProjects[1].beforeImage" 
                    alt="Before"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>Before</span>
                  </div>
                </div>
                <div class="image-slot after">
                  <img 
                    v-if="commercialProjects[1]?.afterImage" 
                    :src="commercialProjects[1].afterImage" 
                    alt="After"
                    @error="handleImageError"
                  />
                  <div v-else class="image-placeholder">
                    <span>After</span>
                  </div>
                </div>
              </div>
              <div class="text-content">
                <p v-if="commercialProjects[1]?.description">{{ commercialProjects[1].description }}</p>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <p class="more-projects-text">…and hundreds more!!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('residential')

const residentialProjects = ref([
  {
    beforeImage: '/images/projects/residential/residential-before-1.jpg',
    afterImage: '/images/projects/residential/residential-after-1.jpg',
    location: 'Lemon Grove'
  },
  {
    beforeImage: '/images/projects/residential/residential-before-2.jpg',
    afterImage: '/images/projects/residential/residential-after-2.jpg',
    location: 'El Cajon'
  },
  {
    beforeImage: '/images/projects/residential/residential-before-3.jpg',
    afterImage: '/images/projects/residential/residential-after-3.jpg',
    location: 'Serra Mesa'
  },
  {
    beforeImage: '/images/projects/residential/residential-before-4.jpg',
    afterImage: '/images/projects/residential/residential-after-4.jpg',
    location: 'Rancho Santa Fe'
  },
  {
    beforeImage: '/images/projects/residential/residential-before-5.jpg',
    afterImage: '/images/projects/residential/residential-after-5.jpg',
    location: 'Santee'
  },
  {
    beforeImage: '/images/projects/residential/residential-before-6.jpg',
    afterImage: '/images/projects/residential/residential-after-6.jpg',
    location: 'Lakeside'
  },
  {
    beforeImage: '/images/projects/residential/residential-before-7.jpg',
    afterImage: '/images/projects/residential/residential-after-7.jpg',
    location: 'Fletcher Hills'
  },
  {
    beforeImage: '/images/projects/residential/residential-before-8.jpg',
    afterImage: '/images/projects/residential/residential-after-8.jpg',
    location: 'La Mesa'
  }
])

const commercialProjects = ref([
  {
    beforeImage: null,
    afterImage: null
  },
  {
    beforeImage: null,
    afterImage: null
  }
])

const handleImageError = (event) => {
  event.target.style.display = 'none'
}
</script>

<style scoped>
.projects {
  min-height: calc(100vh - 200px);
  background: var(--bg-dark);
  padding: 4rem 0;
}

.projects-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.tab-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.tab-button {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: 2px solid var(--primary-color);
  background: rgba(26, 26, 26, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--primary-color);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.tab-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 191, 0, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.tab-button:hover::before {
  width: 300px;
  height: 300px;
}

.tab-button:hover {
  background: rgba(255, 191, 0, 0.15);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 191, 0, 0.3);
  border-color: var(--primary-color);
}

.tab-button.active {
  background: linear-gradient(135deg, var(--primary-color) 0%, #FFD700 100%);
  color: var(--bg-dark);
  box-shadow: 0 6px 20px rgba(255, 191, 0, 0.5), var(--glow-orange);
  border-color: var(--primary-color);
}

.tab-content {
  width: 100%;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.project-container {
  background: rgba(26, 26, 26, 0.7);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 191, 0, 0.2);
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.project-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-color), var(--secondary-color), transparent);
  opacity: 0;
  transition: opacity 0.4s;
}

.project-container:hover::before {
  opacity: 1;
}

.project-container:hover {
  transform: translateY(-8px) scale(1.02) rotateY(5deg) rotateX(-3deg);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 191, 0, 0.2);
  border-color: rgba(255, 191, 0, 0.4);
  background: rgba(26, 26, 26, 0.85);
}

.image-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  width: 100%;
}

.image-slot {
  position: relative;
  width: 100%;
  padding-top: 60%;
  overflow: hidden;
  background: var(--bg-dark);
}

.image-slot img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--white);
}

.image-slot.before .image-placeholder {
  background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
}

.image-slot.after .image-placeholder {
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
}

.text-content {
  padding: 1.25rem 1.5rem;
  background: transparent;
}

.location-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0;
}

.location-icon {
  width: 18px;
  height: 18px;
  color: var(--primary-color);
  flex-shrink: 0;
}

.location-text {
  color: var(--white);
  font-size: 1.05rem;
  font-weight: 600;
}

.text-content p {
  color: var(--text-light);
  font-size: 1.05rem;
  line-height: 1.8;
  margin: 0;
}

/* Fade transition for tab switching */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.more-projects-text {
  text-align: center;
  font-style: italic;
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .projects-grid {
    gap: 1.5rem;
  }

  .text-content {
    padding: 1.25rem;
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 2rem 0;
  }

  .projects-container {
    padding: 0 1rem;
  }

  .more-projects-text {
    font-size: 1.25rem;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }

  .tab-buttons {
    margin-bottom: 2rem;
  }

  .tab-button {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .image-section {
    grid-template-columns: 1fr 1fr;
  }

  .text-content {
    padding: 1.25rem;
  }

  .text-content p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .tab-button {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }

  .text-content {
    padding: 1rem;
  }
}
</style>
