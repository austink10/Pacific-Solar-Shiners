<template>
  <div class="projects">
    <section class="projects-hero">
      <div class="container">
        <h1>Our Projects</h1>
        <p class="hero-subtitle">See the difference professional cleaning makes</p>
      </div>
    </section>

    <section class="projects-content">
      <div class="container">
        <div class="filter-tabs">
          <button 
            class="filter-tab" 
            :class="{ active: activeFilter === 'all' }"
            @click="activeFilter = 'all'"
          >
            All Projects
          </button>
          <button 
            class="filter-tab" 
            :class="{ active: activeFilter === 'residential' }"
            @click="activeFilter = 'residential'"
          >
            Residential
          </button>
          <button 
            class="filter-tab" 
            :class="{ active: activeFilter === 'commercial' }"
            @click="activeFilter = 'commercial'"
          >
            Commercial
          </button>
        </div>

        <div class="projects-grid">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="project-card"
          >
            <div class="project-images">
              <div class="image-comparison">
                <div class="image-wrapper">
                  <div class="image-placeholder before">
                    <span>Before</span>
                  </div>
                </div>
                <div class="image-wrapper">
                  <div class="image-placeholder after">
                    <span>After</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p class="project-type">{{ project.type }}</p>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-stats">
                <div class="stat">
                  <strong>{{ project.panels }}</strong>
                  <span>Panels</span>
                </div>
                <div class="stat">
                  <strong>{{ project.efficiency }}</strong>
                  <span>Efficiency Gain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('all')

const projects = [
  {
    id: 1,
    title: 'Modern Family Home - San Diego',
    type: 'Residential',
    description: 'Complete cleaning of a 20-panel residential installation. Removed years of accumulated dirt, pollen, and bird droppings.',
    panels: '20',
    efficiency: '+28%',
    category: 'residential'
  },
  {
    id: 2,
    title: 'Downtown Office Complex',
    type: 'Commercial',
    description: 'Large-scale commercial solar array cleaning. Improved energy output significantly for this 500-panel installation.',
    panels: '500',
    efficiency: '+32%',
    category: 'commercial'
  },
  {
    id: 3,
    title: 'Suburban Home - Los Angeles',
    type: 'Residential',
    description: 'Regular maintenance cleaning for a residential property. Restored panels to peak performance after seasonal buildup.',
    panels: '16',
    efficiency: '+25%',
    category: 'residential'
  },
  {
    id: 4,
    title: 'Shopping Center Rooftop',
    type: 'Commercial',
    description: 'Comprehensive cleaning of rooftop solar panels at a major shopping center. Enhanced energy production for the entire facility.',
    panels: '800',
    efficiency: '+35%',
    category: 'commercial'
  },
  {
    id: 5,
    title: 'Eco-Friendly Community',
    type: 'Residential',
    description: 'Multi-home solar panel cleaning project in an eco-friendly community. Consistent results across all properties.',
    panels: '24',
    efficiency: '+30%',
    category: 'residential'
  },
  {
    id: 6,
    title: 'Manufacturing Facility',
    type: 'Commercial',
    description: 'Industrial solar panel cleaning for a large manufacturing facility. Maximized energy output for production needs.',
    panels: '1200',
    efficiency: '+40%',
    category: 'commercial'
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === activeFilter.value)
})
</script>

<style scoped>
.projects {
  min-height: calc(100vh - 200px);
}

.projects-hero {
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
  color: var(--white);
  padding: 4rem 0;
  text-align: center;
}

.projects-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.95;
}

.projects-content {
  padding: 4rem 0;
  background: var(--bg-dark);
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-tab {
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--primary-color);
  background: var(--bg-light);
  color: var(--primary-color);
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.filter-tab:hover {
  background: rgba(255, 191, 0, 0.1);
}

.filter-tab.active {
  background: var(--primary-color);
  color: var(--bg-dark);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.project-images {
  width: 100%;
  background: var(--bg-dark);
}

.image-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

.image-wrapper {
  position: relative;
  padding-top: 75%;
  overflow: hidden;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--white);
}

.image-placeholder.before {
  background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
}

.image-placeholder.after {
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  color: var(--white);
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.project-type {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-description {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-stats {
  display: flex;
  gap: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat strong {
  color: var(--white);
  font-size: 1.5rem;
  font-weight: 700;
}

.stat span {
  color: var(--text-light);
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .projects-hero {
    padding: 3rem 0;
  }

  .projects-hero h1 {
    font-size: 2rem;
  }

  .projects-content {
    padding: 2rem 0;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .filter-tabs {
    margin-bottom: 2rem;
  }
}
</style>

