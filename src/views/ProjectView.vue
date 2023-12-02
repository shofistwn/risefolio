<template>
  <div class="mb-44">
    <PageTitle>
      <template v-slot:title>projects</template>
      <template v-slot:desc>List of my projects</template>
    </PageTitle>

    <section class="mt-16">
      <SectionTitle>
        <template v-slot:title>completed-apps</template>
      </SectionTitle>

      <Project :projects="projects" />
    </section>
  </div>
</template>

<script>
import SectionTitle from '../components/SectionTitle.vue'
import PageTitle from '../components/PageTitle.vue'
import Project from '../components/Project.vue'

import { projects } from './../../db.json'

export default {
  components: {
    SectionTitle,
    PageTitle,
    Project,
  },
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    this.projects = projects;
  }
}
</script>
