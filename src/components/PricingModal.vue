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

        <button type="submit" class="submit-btn" :disabled="loading">
          <span v-if="loading">Sending...</span>
          <span v-else>Submit Request</span>
        </button>
      </form>

      <div v-if="submitted" class="success-message">
        <p>✓ Thank you! We'll contact you soon with your pricing.</p>
      </div>

      <div v-if="error" class="error-message">
        <p>⚠ There was an error submitting your request. Please try again or contact us directly.</p>
      </div>

      <div v-if="loading" class="loading-message">
        <p>⏳ Sending your request...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { emailjsConfig } from '../config/emailjs.js'

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
const loading = ref(false)
const error = ref(false)
let emailjs = null

// Load EmailJS from CDN
onMounted(async () => {
  if (!window.emailjs) {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
    script.onload = () => {
      emailjs = window.emailjs
      // Initialize EmailJS with your public key
      if (emailjsConfig.publicKey && emailjsConfig.publicKey !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(emailjsConfig.publicKey)
      }
    }
    document.head.appendChild(script)
  } else {
    emailjs = window.emailjs
    if (emailjsConfig.publicKey && emailjsConfig.publicKey !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(emailjsConfig.publicKey)
    }
  }
})

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
    error.value = false
    loading.value = false
  }, 300)
}

const handleSubmit = async () => {
  loading.value = true
  error.value = false
  
  try {
    // Wait for EmailJS to load if not already loaded
    if (!emailjs && window.emailjs) {
      emailjs = window.emailjs
    }
    
    if (!emailjs) {
      throw new Error('EmailJS not loaded yet')
    }

    // Check if EmailJS is configured
    if (emailjsConfig.serviceId === 'YOUR_SERVICE_ID' || 
        emailjsConfig.templateId === 'YOUR_TEMPLATE_ID' ||
        emailjsConfig.publicKey === 'YOUR_PUBLIC_KEY') {
      throw new Error('EmailJS not configured. Please set up your EmailJS credentials in src/config/emailjs.js')
    }

    // Send email using EmailJS
    await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      {
        to_email: emailjsConfig.toEmail,
        panels: form.value.panels,
        stories: form.value.stories,
        address: form.value.address,
        phone: form.value.phone,
        message: `New Pricing Request:
        
Number of Panels: ${form.value.panels}
Number of Stories: ${form.value.stories}
Property Address: ${form.value.address}
Phone Number: ${form.value.phone}`
      }
    )
    
    submitted.value = true
    loading.value = false
    
    // Close modal after 2 seconds
    setTimeout(() => {
      closeModal()
    }, 2000)
  } catch (err) {
    console.error('Error sending email:', err)
    error.value = true
    loading.value = false
  }
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

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.error-message {
  margin-top: 1rem;
  padding: 1rem;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 6px;
  color: #721c24;
  text-align: center;
}

.error-message p {
  margin: 0;
  font-weight: 500;
}

.loading-message {
  margin-top: 1rem;
  padding: 1rem;
  background: #d1ecf1;
  border: 1px solid #bee5eb;
  border-radius: 6px;
  color: #0c5460;
  text-align: center;
}

.loading-message p {
  margin: 0;
  font-weight: 500;
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

