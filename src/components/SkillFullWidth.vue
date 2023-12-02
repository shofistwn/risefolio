<template>
  <section class="mt-20 lg:mt-28">
    <SectionTitle>
      <template v-slot:title>skills</template>
    </SectionTitle>

    <div class="grid lg:grid-cols-5 gap-4 mt-6 lg:mt-12">
      <SkillItem>
        <template v-slot:title>Languages</template>
        <template v-slot:item>
          <li v-for="(lang, index) of languages" :key="index">{{ lang }}</li>
        </template>
      </SkillItem>

      <SkillItem>
        <template v-slot:title>Databases</template>
        <template v-slot:item>
          <li v-for="(database, index) of databases" :key="index">{{ database }}</li>
        </template>
      </SkillItem>

      <SkillItem>
        <template v-slot:title>Frameworks</template>
        <template v-slot:item>
          <li v-for="(framework, index) of frameworks" :key="index">{{ framework }}</li>
        </template>
      </SkillItem>

      <SkillItem>
        <template v-slot:title>Tools</template>
        <template v-slot:item>
          <li v-for="(tool, index) of tools" :key="index">{{ tool }}</li>
        </template>
      </SkillItem>

      <SkillItem>
        <template v-slot:title>Others</template>
        <template v-slot:item>
          <li v-for="(other, index) of others" :key="index">{{ other }}</li>
        </template>
      </SkillItem>
    </div>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import SkillItem from './SkillItem.vue'

import { skills } from './../../db.json'

export default {
  components: {
    SkillItem,
    SectionTitle
  },
  data() {
    return {
      languages: [],
      databases: [],
      frameworks: [],
      tools: [],
      others: [],
    }
  },
  mounted() {
    this.languages = skills.languages
    this.databases = skills.databases
    this.frameworks = skills.frameworks
    this.tools = skills.tools
    this.others = skills.others
  }
}
</script>
