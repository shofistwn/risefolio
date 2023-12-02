<template>
  <div class="mb-36">
    <Hero />

    <section class="mt-20">
      <SectionTitle>
        <template v-slot:title>projects</template>
        <template v-slot:link>
          <RouterLink :to="{ name: 'projects' }">View all ~~></RouterLink>
        </template>
      </SectionTitle>

      <Project :projects="projects" />
    </section>

    <section class="mt-24">
      <SectionTitle>
        <template v-slot:title>skills</template>
      </SectionTitle>

      <Skill />
    </section>

    <section class="mt-24">
      <SectionTitle>
        <template v-slot:title>about-me</template>
      </SectionTitle>

      <AboutMe>
        <RouterLink :to="{ name: 'about-me' }" class="btn btn-primary"> Read more -> </RouterLink>
      </AboutMe>
    </section>

    <section class="mt-24">
      <SectionTitle>
        <template v-slot:title>contact</template>
      </SectionTitle>

      <Contact />
    </section>
  </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue'
import Contact from '../components/Contact.vue'
import Hero from '../components/Hero.vue'
import Project from '../components/Project.vue'
import Skill from '../components/Skill.vue'
import SectionTitle from '../components/SectionTitle.vue'

import { featured_projects } from './../../db.json'

export default {
  components: {
    AboutMe,
    Contact,
    Hero,
    Project,
    Skill,
    SectionTitle,
  },
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    this.projects = featured_projects;
  }
}
</script>
