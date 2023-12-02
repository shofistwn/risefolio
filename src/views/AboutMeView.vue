<template>
  <div class="mb-40">
    <PageTitle>
      <template v-slot:title>about-me</template>
      <template v-slot:desc>Who am i?</template>
    </PageTitle>

    <section>
      <AboutMe />
    </section>

    <SkillFullWidth />

    <FunFact :facts="facts" />
  </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue'
import FunFact from '../components/FunFact.vue'
import PageTitle from '../components/PageTitle.vue'
import SkillFullWidth from '../components/SkillFullWidth.vue'

import { facts } from './../../db.json'

export default {
  components: {
    AboutMe,
    FunFact,
    PageTitle,
    SkillFullWidth,
  },
  data() {
    return {
      facts: []
    }
  },
  mounted() {
    this.facts = facts
  }
}
</script>
