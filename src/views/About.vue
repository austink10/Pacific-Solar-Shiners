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
          <h2 class="heading-1">Our Mission</h2>
          <p>
            I founded and operate Pacific Solar Shiners as a recent graduate of San Diego State University with firsthand experience in the solar industry. While working with a national solar brokerage that partnered with leading solar companies, manufacturers, EPCs, and installers, one issue became consistently clear: many homeowners and businesses were not properly maintaining the cleanliness of their solar panels—or fully understanding the impact of neglecting them.
          </p>
          <p>
            When dust, dirt, soot, pollen, and other airborne particles accumulate on a solar array, a layer of buildup known as soiling forms. This buildup blocks sunlight from reaching the panels, reducing efficiency, lowering energy production, and ultimately increasing energy costs. Over time, neglected panels can also suffer permanent damage, while prolonged moisture and moss buildup may contribute to roof deterioration. I created Pacific Solar Shiners to solve this problem—helping customers protect their investment and maximize the performance of their solar panels.
          </p>
        </div>

        <div class="content-section">
          <h2 class="heading-2">Why Us</h2>
          <p>
            Before starting Pacific Solar Shiners, I trained and worked directly with some of the highest-rated solar panel cleaning companies in the San Diego area. That hands-on experience gave me a clear understanding of how solar panels should be cleaned—and where much of the industry falls short.
          </p>
          <p>
            I consistently noticed two major issues. First, many companies priced their services too high, leaving homeowners with little to no real return, as the cost of cleaning often outweighed the additional energy savings. Second, solar panel cleaning was frequently treated as an add-on service—bundled with window cleaning or pressure washing—rather than a specialized process. As a result, panels were often rushed, improperly cleaned, and serviced with the wrong equipment.
          </p>
          <p>
            I started Pacific Solar Shiners to address these issues. My focus is simple: provide specialized, detail-driven solar panel cleaning at a fair price—helping your system perform efficiently while protecting your long-term investment.
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
  background: transparent;
  position: relative;
  z-index: 2;
}

.content-section {
  margin-bottom: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
}

.content-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--white) 0%, var(--primary-color) 50%, var(--secondary-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
}

.heading-1 {
  animation: gradientShift 3s ease infinite;
}

.heading-2 {
  animation: gradientShiftReverse 3s ease infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes gradientShiftReverse {
  0%, 100% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 0% 50%;
  }
}

.content-section p {
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1.05rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
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

