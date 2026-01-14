<template>
  <canvas ref="canvasRef" class="particle-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationFrame = null
let particles = []
let mouse = { x: 0, y: 0 }

const initParticles = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  // Create bubbles
  const bubbleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000))
  particles = []
  let time = 0

  for (let i = 0; i < bubbleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 2,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      glowColor: Math.random() > 0.5 ? '#FF6600' : '#00BFFF',
      pulsePhase: Math.random() * Math.PI * 2
    })
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    time += 0.02

    // Update and draw bubbles
    particles.forEach((particle) => {
      // Update position
      particle.x += particle.vx
      particle.y += particle.vy

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width
      if (particle.x > canvas.width) particle.x = 0
      if (particle.y < 0) particle.y = canvas.height
      if (particle.y > canvas.height) particle.y = 0

      // Calculate pulsing glow intensity
      const pulse = 0.6 + 0.4 * Math.sin(time * 2 + particle.pulsePhase)
      const glowIntensity = pulse * 0.7

      // Draw glow (outer glow)
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.radius * 3
      )
      const glowColor = particle.glowColor === '#FF6600' 
        ? `rgba(255, 102, 0, ${glowIntensity})` 
        : `rgba(0, 191, 255, ${glowIntensity})`
      
      gradient.addColorStop(0, glowColor)
      gradient.addColorStop(0.5, glowColor.replace(/[\d\.]+\)$/, '0.3)'))
      gradient.addColorStop(1, 'transparent')

      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Draw bubble (semi-transparent white with subtle highlight)
      const bubbleGradient = ctx.createRadialGradient(
        particle.x - particle.radius * 0.3, 
        particle.y - particle.radius * 0.3, 
        0,
        particle.x, 
        particle.y, 
        particle.radius
      )
      bubbleGradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)')
      bubbleGradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.15)')
      bubbleGradient.addColorStop(1, 'rgba(255, 255, 255, 0.05)')

      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fillStyle = bubbleGradient
      ctx.fill()

      // Draw bubble highlight (small white highlight on top-left)
      ctx.beginPath()
      ctx.arc(
        particle.x - particle.radius * 0.3, 
        particle.y - particle.radius * 0.3, 
        particle.radius * 0.3, 
        0, 
        Math.PI * 2
      )
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
      ctx.fill()

      // Mouse interaction (subtle)
      const dx = mouse.x - particle.x
      const dy = mouse.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 120) {
        const force = (120 - distance) / 120 * 0.008
        particle.vx += (dx / distance) * force
        particle.vy += (dy / distance) * force
      }
    })

    animationFrame = requestAnimationFrame(animate)
  }

  const handleMouseMove = (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  window.addEventListener('mousemove', handleMouseMove)
  animate()

  // Cleanup function
  return () => {
    window.removeEventListener('resize', resizeCanvas)
    window.removeEventListener('mousemove', handleMouseMove)
    if (animationFrame) {
      cancelAnimationFrame(animationFrame)
    }
  }
}

let cleanup = null

onMounted(() => {
  cleanup = initParticles()
})

onUnmounted(() => {
  if (cleanup) cleanup()
})
</script>

<style scoped>
.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.6;
}
</style>
