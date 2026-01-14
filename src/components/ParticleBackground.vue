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
  const bubbleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))
  particles = []
  let time = 0

  for (let i = 0; i < bubbleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.8,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      iridescentColor: Math.random() > 0.5 ? '#FF6600' : '#00BFFF',
      pulsePhase: Math.random() * Math.PI * 2,
      rotation: Math.random() * Math.PI * 2
    })
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    time += 0.015

    // Update and draw bubbles
    particles.forEach((particle) => {
      // Update position
      particle.x += particle.vx
      particle.y += particle.vy
      particle.rotation += 0.01

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width
      if (particle.x > canvas.width) particle.x = 0
      if (particle.y < 0) particle.y = canvas.height
      if (particle.y > canvas.height) particle.y = 0

      // Calculate iridescent shift
      const iridescentShift = Math.sin(time + particle.pulsePhase) * 0.3 + 0.7
      const isOrange = particle.iridescentColor === '#FF6600'
      
      // Draw subtle iridescent rim (very subtle glow on edges)
      const rimGradient = ctx.createRadialGradient(
        particle.x, particle.y, particle.radius * 0.7,
        particle.x, particle.y, particle.radius * 1.2
      )
      const rimColor = isOrange
        ? `rgba(255, 102, 0, ${0.15 * iridescentShift})`
        : `rgba(0, 191, 255, ${0.15 * iridescentShift})`
      
      rimGradient.addColorStop(0, 'transparent')
      rimGradient.addColorStop(0.7, rimColor)
      rimGradient.addColorStop(1, 'transparent')

      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius * 1.2, 0, Math.PI * 2)
      ctx.fillStyle = rimGradient
      ctx.fill()

      // Draw bubble body (highly translucent, like soap film)
      const bubbleGradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.radius
      )
      bubbleGradient.addColorStop(0, 'rgba(255, 255, 255, 0.08)')
      bubbleGradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.05)')
      bubbleGradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.02)')
      bubbleGradient.addColorStop(1, 'rgba(255, 255, 255, 0.01)')

      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fillStyle = bubbleGradient
      ctx.fill()

      // Draw iridescent sheen (shifting colors on bubble surface)
      const sheenAngle = particle.rotation
      const sheenX = particle.x + Math.cos(sheenAngle) * particle.radius * 0.4
      const sheenY = particle.y + Math.sin(sheenAngle) * particle.radius * 0.4
      
      const sheenGradient = ctx.createRadialGradient(
        sheenX, sheenY, 0,
        particle.x, particle.y, particle.radius
      )
      
      const sheenColor1 = isOrange
        ? `rgba(255, 102, 0, ${0.25 * iridescentShift})`
        : `rgba(0, 191, 255, ${0.25 * iridescentShift})`
      const sheenColor2 = isOrange
        ? `rgba(255, 140, 0, ${0.15 * iridescentShift})`
        : `rgba(0, 150, 255, ${0.15 * iridescentShift})`
      
      sheenGradient.addColorStop(0, sheenColor1)
      sheenGradient.addColorStop(0.5, sheenColor2)
      sheenGradient.addColorStop(1, 'transparent')

      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fillStyle = sheenGradient
      ctx.fill()

      // Draw bright white specular highlight (top-left, like real soap bubbles)
      const highlightX = particle.x - particle.radius * 0.35
      const highlightY = particle.y - particle.radius * 0.35
      const highlightGradient = ctx.createRadialGradient(
        highlightX, highlightY, 0,
        highlightX, highlightY, particle.radius * 0.4
      )
      highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)')
      highlightGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)')
      highlightGradient.addColorStop(1, 'transparent')

      ctx.beginPath()
      ctx.arc(highlightX, highlightY, particle.radius * 0.4, 0, Math.PI * 2)
      ctx.fillStyle = highlightGradient
      ctx.fill()

      // Draw subtle outline (thin edge for definition)
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.strokeStyle = isOrange
        ? `rgba(255, 102, 0, ${0.2 * iridescentShift})`
        : `rgba(0, 191, 255, ${0.2 * iridescentShift})`
      ctx.lineWidth = 0.3
      ctx.stroke()

      // Mouse interaction (subtle)
      const dx = mouse.x - particle.x
      const dy = mouse.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 100) {
        const force = (100 - distance) / 100 * 0.005
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
