<template>
  <div class="partnerships">
    <section class="partnerships-content">
      <div class="container">
        <PartnershipFeature
          title="RST CleanTech"
          :text="rstCleanTechText"
          :image-src="'/images/partnerships/rst-system.jpg'"
          :logo-src="'/images/logos/rst-cleantech-logo.png'"
          :show-logo-placeholder="false"
          link-text="For more information, please visit rst-cleantech.com"
          link-url="https://rst-cleantech.com"
          link-target="_blank"
        />

        <div class="benefits-section">
          <h2>Key Benefits</h2>
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon">🤖</div>
              <h3>Fully Automated</h3>
              <p>No manual labor required - the system operates independently</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">⚡</div>
              <h3>Increased Efficiency</h3>
              <p>Maintains panels at peak performance consistently</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">💰</div>
              <h3>Cost Effective</h3>
              <p>Reduces long-term maintenance costs significantly</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">🌱</div>
              <h3>Eco-Friendly</h3>
              <p>Minimal water usage and environmentally safe cleaning solutions</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">📊</div>
              <h3>Data Analytics</h3>
              <p>Real-time monitoring and performance analytics</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">🛡️</div>
              <h3>Panel Protection</h3>
              <p>Gentle cleaning process protects panel integrity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PartnershipFeature from '../components/PartnershipFeature.vue'

const rstCleanTechText = "Installed on more than 4,000 solar projects worldwide, RST CleanTech's automated solar panel cleaning system keeps panels operating at peak efficiency year-round—without the need for manual labor. Founded in 2013, RST CleanTech operates across four continents and holds two patented technologies, establishing itself as a global leader in automated solar panel maintenance. This environmentally friendly cleaning system is manufacturer-approved and fully compliant with solar panel warranty requirements. Pacific Solar Shiners works directly with RST CleanTech's North American office in Los Angeles and is a certified installer of their system."
</script>

<style scoped>
.partnerships {
  min-height: calc(100vh - 200px);
}

.partnerships-hero {
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
  color: var(--white);
  padding: 4rem 0;
  text-align: center;
}

.partnerships-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.95;
}

.partnerships-content {
  padding: 4rem 0;
  background: var(--bg-dark);
}

.partnership-intro {
  text-align: center;
  max-width: 900px;
  margin: 0 auto 4rem;
}

.partnership-intro h2 {
  color: var(--white);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.intro-text {
  font-size: 1.1rem;
  color: var(--text-light);
  line-height: 1.8;
}

.system-overview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;
  background: var(--bg-light);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.system-image {
  position: relative;
  padding-top: 75%;
  border-radius: 8px;
  overflow: hidden;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 1.2rem;
  font-weight: 600;
}

.system-description h3 {
  color: var(--white);
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.system-description p {
  color: var(--text-light);
  line-height: 1.8;
  font-size: 1.05rem;
}

.benefits-section {
  margin-bottom: 4rem;
}

.benefits-section h2 {
  text-align: center;
  color: var(--white);
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: 700;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.benefit-card {
  background: var(--white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.benefit-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.benefit-card h3 {
  color: var(--white);
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
}

.benefit-card p {
  color: var(--text-light);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .partnerships-hero {
    padding: 3rem 0;
  }

  .partnerships-hero h1 {
    font-size: 2rem;
  }

  .partnerships-content {
    padding: 2rem 0;
  }

  .partnership-intro h2,
  .benefits-section h2 {
    font-size: 2rem;
  }

  .system-overview {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>

