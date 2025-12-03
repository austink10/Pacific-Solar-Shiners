<template>
  <div class="partnerships">
    <section class="partnerships-hero">
      <div class="container">
        <h1>Partnerships</h1>
        <p class="hero-subtitle">Working with industry leaders</p>
      </div>
    </section>

    <section class="partnerships-content">
      <div class="container">
        <div class="partnership-intro">
          <h2>RST CleanTech Automated Solar Panel Cleaning System</h2>
          <p class="intro-text">
            Pacific Solar Shiners is proud to partner with RST CleanTech, a leader in 
            automated solar panel cleaning technology. This innovative system revolutionizes 
            how we maintain and clean solar installations.
          </p>
        </div>

        <div class="system-overview">
          <div class="system-image">
            <div class="image-placeholder">
              <span>RST CleanTech System</span>
            </div>
          </div>
          <div class="system-description">
            <h3>Advanced Automated Cleaning Technology</h3>
            <p>
              The RST CleanTech system represents the cutting edge of solar panel maintenance. 
              This fully automated solution ensures consistent, thorough cleaning without the 
              need for manual intervention, making it ideal for large-scale installations and 
              hard-to-reach panels.
            </p>
          </div>
        </div>

        <div class="how-it-works">
          <h2>How It Works</h2>
          <div class="steps-grid">
            <div class="step-card">
              <div class="step-number">1</div>
              <h3>Automated Detection</h3>
              <p>
                The system uses advanced sensors to detect when panels need cleaning, 
                monitoring dust levels, efficiency drops, and environmental conditions.
              </p>
            </div>
            <div class="step-card">
              <div class="step-number">2</div>
              <h3>Precision Cleaning</h3>
              <p>
                Robotic cleaning arms move across the panels with precision, using 
                specialized brushes and eco-friendly cleaning solutions to remove all 
                debris and buildup.
              </p>
            </div>
            <div class="step-card">
              <div class="step-number">3</div>
              <h3>Water Conservation</h3>
              <p>
                The system uses minimal water through advanced recycling technology, 
                making it environmentally friendly and cost-effective.
              </p>
            </div>
            <div class="step-card">
              <div class="step-number">4</div>
              <h3>Continuous Monitoring</h3>
              <p>
                After cleaning, the system continues to monitor panel performance, 
                ensuring optimal efficiency and scheduling maintenance as needed.
              </p>
            </div>
          </div>
        </div>

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

        <div class="partnership-details">
          <h2>Our Partnership</h2>
          <p>
            Through our partnership with RST CleanTech, Pacific Solar Shiners can offer 
            state-of-the-art automated cleaning solutions for commercial and large-scale 
            residential installations. This technology complements our traditional cleaning 
            services, allowing us to provide the best solution for every client.
          </p>
          <p>
            Whether you need the precision of automated cleaning or the flexibility of 
            manual service, we have the expertise and technology to keep your solar panels 
            operating at maximum efficiency.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
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
}

.partnership-intro {
  text-align: center;
  max-width: 900px;
  margin: 0 auto 4rem;
}

.partnership-intro h2 {
  color: var(--secondary-color);
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
  background: var(--white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
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
  color: var(--secondary-color);
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.system-description p {
  color: var(--text-light);
  line-height: 1.8;
  font-size: 1.05rem;
}

.how-it-works {
  margin-bottom: 4rem;
}

.how-it-works h2 {
  text-align: center;
  color: var(--secondary-color);
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: 700;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.step-card {
  background: var(--white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.step-number {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 1.5rem;
}

.step-card h3 {
  color: var(--secondary-color);
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.step-card p {
  color: var(--text-light);
  line-height: 1.6;
}

.benefits-section {
  margin-bottom: 4rem;
}

.benefits-section h2 {
  text-align: center;
  color: var(--secondary-color);
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
  color: var(--secondary-color);
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
}

.benefit-card p {
  color: var(--text-light);
  line-height: 1.6;
}

.partnership-details {
  max-width: 900px;
  margin: 0 auto;
  background: var(--bg-light);
  padding: 2.5rem;
  border-radius: 12px;
}

.partnership-details h2 {
  color: var(--secondary-color);
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.partnership-details p {
  color: var(--text-dark);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1.05rem;
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
  .how-it-works h2,
  .benefits-section h2 {
    font-size: 2rem;
  }

  .system-overview {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .steps-grid,
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>

