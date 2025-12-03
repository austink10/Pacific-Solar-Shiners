<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="closeModal" aria-label="Close modal">&times;</button>
      <h2>Get Your Pricing</h2>
      <p class="modal-subtitle">Fill out the form below and we'll contact you with a personalized quote.</p>
      
      <form @submit.prevent="handleSubmit" class="pricing-form">
        <div class="form-group">
          <label for="panels">Number of Panels *</label>
          <input
            type="number"
            id="panels"
            v-model="form.panels"
            required
            min="1"
            placeholder="e.g., 20"
          />
        </div>

        <div class="form-group">
          <label for="stories">Number of Stories *</label>
          <input
            type="number"
            id="stories"
            v-model="form.stories"
            required
            min="1"
            max="10"
            placeholder="e.g., 2"
          />
        </div>

        <div class="form-group">
          <label for="address">Property Address *</label>
          <input
            type="text"
            id="address"
            v-model="form.address"
            required
            placeholder="123 Main St, City, State ZIP"
          />
        </div>

        <div class="form-group">
          <label for="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            v-model="form.phone"
            required
            placeholder="(555) 123-4567"
          />
        </div>

        <button type="submit" class="submit-btn">Submit Request</button>
      </form>

      <div v-if="submitted" class="success-message">
        <p>✓ Thank you! We'll contact you soon with your pricing.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const form = ref({
  panels: '',
  stories: '',
  address: '',
  phone: ''
})

const submitted = ref(false)

const closeModal = () => {
  emit('close')
  // Reset form after animation
  setTimeout(() => {
    form.value = {
      panels: '',
      stories: '',
      address: '',
      phone: ''
    }
    submitted.value = false
  }, 300)
}

const handleSubmit = () => {
  // Here you would typically send the data to a backend API
  console.log('Form submitted:', form.value)
  submitted.value = true
  
  // In a real application, you would send this data to your backend
  // For now, we'll just show a success message
  setTimeout(() => {
    closeModal()
  }, 2000)
}

// Close on Escape key
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.addEventListener('keydown', handleEscape)
  } else {
    document.removeEventListener('keydown', handleEscape)
  }
})

const handleEscape = (e) => {
  if (e.key === 'Escape') {
    closeModal()
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background: var(--white);
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.3s;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--text-light);
  cursor: pointer;
  line-height: 1;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s;
}

.modal-close:hover {
  color: var(--text-dark);
}

.modal-content h2 {
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
}

.modal-subtitle {
  color: var(--text-light);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.pricing-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.9rem;
}

.form-group input {
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: var(--primary-color);
}

.submit-btn {
  background: var(--primary-color);
  color: var(--white);
  border: none;
  padding: 0.875rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  margin-top: 0.5rem;
}

.submit-btn:hover {
  background: #e55a2b;
  transform: translateY(-2px);
}

.submit-btn:active {
  transform: translateY(0);
}

.success-message {
  margin-top: 1rem;
  padding: 1rem;
  background: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 6px;
  color: #155724;
  text-align: center;
}

.success-message p {
  margin: 0;
  font-weight: 500;
}

@media (max-width: 768px) {
  .modal-content {
    padding: 1.5rem;
    width: 95%;
  }

  .modal-content h2 {
    font-size: 1.5rem;
  }
}
</style>

