<template>
  <div class="grid lg:grid-cols-3 gap-4 mt-6 lg:mt-12">
    <ProjectItem v-for="(project, index) of projects" :key="index">
      <template v-slot:thumbnail>
        <img :src="project.thumbnail" alt="" class="h-auto w-full" />
      </template>

      <template v-slot:title>{{ project.title }}</template>

      <template v-slot:desc>{{ project.desc }}</template>

      <template v-slot:stacks>
        <li v-for="(stack, index) of project.stacks" :key="index">{{ stack }}</li>
      </template>

      <template v-slot:live v-if="project.live">
        <a :href="project.live" target="_blank" class="btn btn-primary">Live &lt;~></a>
      </template>

      <template v-slot:repo v-if="project.repo">
        <a :href="project.repo" target="_blank" class="btn btn-secondary">Code >=</a>
      </template>
    </ProjectItem>
  </div>
</template>

<script>
import ProjectItem from '../components/ProjectItem.vue'

export default {
  components: {
    ProjectItem
  },
  props: {
    projects: {
      type: Object,
    }
  }
}
</script>
