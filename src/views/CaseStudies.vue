<template>
  <div class="case-studies">
    <div class="message-container">
      <p class="message">This page is currently being finalized. Please check back in a few weeks.</p>
    </div>
  </div>
</template>

<script setup>
// No data needed for this placeholder page
</script>

<style scoped>
.case-studies {
  min-height: calc(100vh - 200px);
  background: var(--bg-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
}

.message-container {
  text-align: center;
  max-width: 600px;
}

.message {
  color: var(--text-light);
  font-size: 1.25rem;
  line-height: 1.8;
  margin: 0;
}

@media (max-width: 768px) {
  .case-studies {
    padding: 2rem 1rem;
  }

  .message {
    font-size: 1.1rem;
  }
}
</style>
