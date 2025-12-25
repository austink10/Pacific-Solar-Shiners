<template>
  <div class="partnership-feature">
    <div class="partnership-container">
      <div class="partnership-content">
        <div class="text-column">
          <div class="title-section">
            <h2 class="section-title">{{ title }}</h2>
            <div v-if="logoSrc" class="logo-container">
              <img :src="logoSrc" :alt="title + ' logo'" class="logo-image" />
            </div>
            <div class="logo-placeholder" v-else-if="showLogoPlaceholder">
              <!-- Logo will be added here later -->
            </div>
          </div>
          <p class="body-text">{{ text }}</p>
        </div>
        <div class="image-column">
          <div class="image-placeholder">
            <span v-if="!imageSrc">Image Placeholder</span>
            <img v-else :src="imageSrc" :alt="title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    default: null
  },
  logoSrc: {
    type: String,
    default: null
  },
  showLogoPlaceholder: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.partnership-feature {
  margin: 3rem 0;
}

.partnership-container {
  background: var(--bg-light);
  border-radius: 16px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow);
}

.partnership-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.text-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title-section {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.section-title {
  color: var(--white);
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
}

.logo-placeholder {
  width: 120px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px dashed rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.logo-placeholder::after {
  content: 'Logo';
  color: var(--text-light);
  font-size: 0.75rem;
  opacity: 0.5;
}

.logo-container {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  max-height: 50px;
  background: transparent;
}

.logo-image {
  max-width: 180px;
  max-height: 50px;
  width: auto;
  height: auto;
  object-fit: contain;
  background: transparent;
  /* Remove white background - works best if logo has transparent background */
  /* If logo has white background, consider using a PNG with transparency */
  mix-blend-mode: normal;
}

.body-text {
  color: var(--text-light);
  line-height: 1.8;
  font-size: 1.05rem;
  margin: 0;
}

.image-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 100%;
  max-width: 500px;
  aspect-ratio: 4 / 3;
  background: var(--bg-dark);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.image-placeholder span {
  color: var(--text-light);
  font-size: 0.9rem;
  opacity: 0.5;
}

.image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .partnership-container {
    padding: 2rem;
  }

  .partnership-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .title-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .image-placeholder {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .partnership-container {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .body-text {
    font-size: 1rem;
  }
}
</style>


