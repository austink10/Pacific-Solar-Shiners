<template>
  <div class="case-studies">
    <section class="case-studies-hero">
      <div class="container">
        <h1>Case Studies</h1>
        <p class="hero-subtitle">Real results from real customers</p>
      </div>
    </section>

    <section class="case-studies-content">
      <div class="container">
        <div class="intro-text">
          <p>
            See how professional solar panel cleaning has helped our customers reduce their 
            utility bills and increase their energy savings. The results speak for themselves.
          </p>
        </div>

        <div class="case-studies-grid">
          <div 
            v-for="study in caseStudies" 
            :key="study.id"
            class="case-study-card"
          >
            <div class="case-study-header">
              <h3>{{ study.title }}</h3>
              <span class="case-type">{{ study.type }}</span>
            </div>

            <div class="bill-comparison">
              <div class="bill-card before">
                <div class="bill-label">Before Cleaning</div>
                <div class="bill-amount">${{ study.billBefore }}</div>
                <div class="bill-period">{{ study.period }}</div>
                <div class="bill-details">
                  <p>Energy Output: {{ study.outputBefore }} kWh</p>
                  <p>Panel Efficiency: {{ study.efficiencyBefore }}%</p>
                </div>
              </div>

              <div class="arrow">→</div>

              <div class="bill-card after">
                <div class="bill-label">After Cleaning</div>
                <div class="bill-amount savings">${{ study.billAfter }}</div>
                <div class="bill-period">{{ study.period }}</div>
                <div class="bill-details">
                  <p>Energy Output: {{ study.outputAfter }} kWh</p>
                  <p>Panel Efficiency: {{ study.efficiencyAfter }}%</p>
                </div>
              </div>
            </div>

            <div class="savings-summary">
              <div class="savings-item">
                <strong>Monthly Savings:</strong>
                <span class="savings-amount">${{ study.monthlySavings }}</span>
              </div>
              <div class="savings-item">
                <strong>Annual Savings:</strong>
                <span class="savings-amount">${{ study.annualSavings }}</span>
              </div>
              <div class="savings-item">
                <strong>Efficiency Increase:</strong>
                <span class="savings-amount">{{ study.efficiencyGain }}</span>
              </div>
            </div>

            <div class="case-study-description">
              <p>{{ study.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const caseStudies = [
  {
    id: 1,
    title: 'Residential Home - San Francisco',
    type: 'Residential',
    billBefore: 245,
    billAfter: 172,
    period: 'Monthly',
    outputBefore: 850,
    outputAfter: 1150,
    efficiencyBefore: 68,
    efficiencyAfter: 92,
    monthlySavings: 73,
    annualSavings: 876,
    efficiencyGain: '+24%',
    description: 'After 3 years without cleaning, this residential installation had significant dirt and debris buildup. Our professional cleaning restored the panels to near-new condition, resulting in substantial monthly savings.'
  },
  {
    id: 2,
    title: 'Commercial Office Building - Los Angeles',
    type: 'Commercial',
    billBefore: 1840,
    billAfter: 1280,
    period: 'Monthly',
    outputBefore: 6400,
    outputAfter: 9200,
    efficiencyBefore: 65,
    efficiencyAfter: 94,
    monthlySavings: 560,
    annualSavings: 6720,
    efficiencyGain: '+29%',
    description: 'A large commercial installation with 500+ panels had not been cleaned in over 2 years. The accumulated grime was significantly impacting energy production. Our comprehensive cleaning service restored optimal performance.'
  },
  {
    id: 3,
    title: 'Suburban Home - San Diego',
    type: 'Residential',
    billBefore: 189,
    billAfter: 132,
    period: 'Monthly',
    outputBefore: 650,
    outputAfter: 890,
    efficiencyBefore: 70,
    efficiencyAfter: 96,
    monthlySavings: 57,
    annualSavings: 684,
    efficiencyGain: '+26%',
    description: 'Regular maintenance cleaning for a well-maintained residential system. Even with regular care, seasonal buildup was reducing efficiency. Our service brought the panels back to peak performance.'
  },
  {
    id: 4,
    title: 'Manufacturing Facility - Orange County',
    type: 'Commercial',
    billBefore: 3200,
    billAfter: 2240,
    period: 'Monthly',
    outputBefore: 11200,
    outputAfter: 16000,
    efficiencyBefore: 62,
    efficiencyAfter: 89,
    monthlySavings: 960,
    annualSavings: 11520,
    efficiencyGain: '+27%',
    description: 'Industrial solar array serving a manufacturing facility. Heavy industrial pollution and lack of maintenance had severely impacted panel performance. Our deep cleaning service dramatically improved energy output.'
  }
]
</script>

<style scoped>
.case-studies {
  min-height: calc(100vh - 200px);
}

.case-studies-hero {
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
  color: var(--white);
  padding: 4rem 0;
  text-align: center;
}

.case-studies-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.95;
}

.case-studies-content {
  padding: 4rem 0;
}

.intro-text {
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
}

.intro-text p {
  font-size: 1.1rem;
  color: var(--text-light);
  line-height: 1.8;
}

.case-studies-grid {
  display: grid;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

.case-study-card {
  background: var(--white);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--shadow-lg);
}

.case-study-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--bg-light);
}

.case-study-header h3 {
  color: var(--secondary-color);
  font-size: 1.75rem;
  margin: 0;
}

.case-type {
  background: var(--primary-color);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.bill-comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
}

.bill-card {
  background: var(--bg-light);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}

.bill-card.before {
  border: 2px solid #dee2e6;
}

.bill-card.after {
  border: 2px solid var(--primary-color);
  background: linear-gradient(135deg, #fff5f0 0%, #ffe8dc 100%);
}

.bill-label {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.bill-amount {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.25rem;
}

.bill-amount.savings {
  color: var(--primary-color);
}

.bill-period {
  font-size: 0.85rem;
  color: var(--text-light);
  margin-bottom: 1rem;
}

.bill-details {
  text-align: left;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.bill-details p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: var(--text-dark);
}

.arrow {
  font-size: 2rem;
  color: var(--primary-color);
  font-weight: 700;
}

.savings-summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: var(--bg-light);
  border-radius: 8px;
}

.savings-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.savings-item strong {
  color: var(--text-dark);
  font-size: 0.9rem;
}

.savings-amount {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 700;
}

.case-study-description {
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}

.case-study-description p {
  color: var(--text-light);
  line-height: 1.8;
  margin: 0;
}

@media (max-width: 768px) {
  .case-studies-hero {
    padding: 3rem 0;
  }

  .case-studies-hero h1 {
    font-size: 2rem;
  }

  .case-studies-content {
    padding: 2rem 0;
  }

  .bill-comparison {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .arrow {
    transform: rotate(90deg);
    text-align: center;
  }

  .savings-summary {
    grid-template-columns: 1fr;
  }

  .case-study-card {
    padding: 1.5rem;
  }

  .case-study-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>

