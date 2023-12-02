<template>
  <div>
    <StickySocialMedia />

    <div class="container">
      <Navbar />

      <main class="pt-16">
        <RouterView />
      </main>

      <Footer />
    </div>
  </div>
</template>

<script setup>
import StickySocialMedia from './components/StickySocialMedia.vue'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
</script>
