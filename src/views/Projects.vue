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
                <p>{{ residentialProjects[0]?.description || 'Description text will be added here.' }}</p>
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
                <p>{{ residentialProjects[1]?.description || 'Description text will be added here.' }}</p>
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
                <p>{{ commercialProjects[0]?.description || 'Description text will be added here.' }}</p>
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
                <p>{{ commercialProjects[1]?.description || 'Description text will be added here.' }}</p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('residential')

const residentialProjects = ref([
  {
    beforeImage: null,
    afterImage: null,
    description: 'Description text will be added here.'
  },
  {
    beforeImage: null,
    afterImage: null,
    description: 'Description text will be added here.'
  }
])

const commercialProjects = ref([
  {
    beforeImage: null,
    afterImage: null,
    description: 'Description text will be added here.'
  },
  {
    beforeImage: null,
    afterImage: null,
    description: 'Description text will be added here.'
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
  background: var(--bg-light);
  color: var(--primary-color);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-button:hover {
  background: rgba(255, 191, 0, 0.1);
  transform: translateY(-2px);
}

.tab-button.active {
  background: var(--primary-color);
  color: var(--bg-dark);
  box-shadow: 0 4px 12px rgba(255, 191, 0, 0.3);
}

.tab-content {
  width: 100%;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
}

.project-container {
  background: var(--bg-light);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
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
  padding-top: 75%;
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
  padding: 2rem;
  background: var(--bg-light);
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

@media (max-width: 1024px) {
  .projects-grid {
    gap: 2rem;
  }

  .text-content {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 2rem 0;
  }

  .projects-container {
    padding: 0 1rem;
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
    gap: 2rem;
  }

  .image-section {
    grid-template-columns: 1fr 1fr;
  }

  .text-content {
    padding: 1.5rem;
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
    padding: 1.25rem;
  }
}
</style>
