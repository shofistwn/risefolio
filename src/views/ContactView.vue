<template>
  <div class="mb-40">
    <PageTitle>
      <template v-slot:title>contact</template>
      <template v-slot:desc>Who am i?</template>
    </PageTitle>

    <section>
      <Contact />
    </section>
  </div>
</template>

<script setup>
import Contact from '../components/Contact.vue'
import PageTitle from '../components/PageTitle.vue'
</script>
