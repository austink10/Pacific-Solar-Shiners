<template>
  <div class="about">
    <section class="about-hero">
      <div class="container">
        <h1>About Pacific Solar Shiners</h1>
        <p class="hero-subtitle">Your Trusted Solar Panel Cleaning Experts</p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="content-section">
          <h2>Our Mission</h2>
          <p>
            At Pacific Solar Shiners, we are dedicated to helping homeowners and businesses 
            maximize their solar investment through professional cleaning services. We understand 
            that dirty solar panels can significantly reduce energy output, costing you money 
            and reducing the environmental benefits of solar power.
          </p>
        </div>

        <div class="content-section">
          <h2>Who We Are</h2>
          <p>
            Founded with a passion for renewable energy and environmental sustainability, 
            Pacific Solar Shiners has been serving the Pacific region for years. Our team 
            consists of trained professionals who understand the importance of proper solar 
            panel maintenance.
          </p>
          <p>
            We use industry-leading techniques and eco-friendly cleaning solutions to ensure 
            your panels are not only clean but also protected from damage. Our commitment 
            to excellence has made us a trusted partner for both residential and commercial 
            solar installations.
          </p>
        </div>

        <div class="content-section">
          <h2>What Sets Us Apart</h2>
          <ul class="features-list">
            <li>
              <strong>Expert Knowledge:</strong> Our team is trained in the latest solar 
              panel cleaning techniques and safety protocols.
            </li>
            <li>
              <strong>Eco-Friendly Solutions:</strong> We use only environmentally safe 
              cleaning products that won't harm your panels or the environment.
            </li>
            <li>
              <strong>Proven Results:</strong> Our cleaning services have helped customers 
              increase their solar panel efficiency by up to 30%.
            </li>
            <li>
              <strong>Flexible Scheduling:</strong> We work around your schedule to minimize 
              disruption to your daily operations.
            </li>
            <li>
              <strong>Comprehensive Service:</strong> From small residential installations 
              to large commercial arrays, we handle projects of all sizes.
            </li>
          </ul>
        </div>

        <div class="content-section">
          <h2>Our Commitment</h2>
          <p>
            We are committed to providing exceptional service that helps you get the most 
            out of your solar investment. Every cleaning is performed with attention to detail 
            and a focus on maximizing your energy savings. When you choose Pacific Solar Shiners, 
            you're choosing a partner dedicated to your success and the success of renewable energy.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about {
  min-height: calc(100vh - 200px);
}

.about-hero {
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
  color: var(--white);
  padding: 4rem 0;
  text-align: center;
}

.about-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.95;
}

.about-content {
  padding: 4rem 0;
  background: var(--bg-dark);
}

.content-section {
  margin-bottom: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.content-section h2 {
  color: var(--white);
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.content-section p {
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  padding: 1rem;
  margin-bottom: 1rem;
  background: var(--bg-light);
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
  line-height: 1.8;
  color: var(--text-light);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.features-list li strong {
  color: var(--white);
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .about-hero {
    padding: 3rem 0;
  }

  .about-hero h1 {
    font-size: 2rem;
  }

  .about-content {
    padding: 2rem 0;
  }

  .content-section h2 {
    font-size: 1.5rem;
  }
}
</style>

