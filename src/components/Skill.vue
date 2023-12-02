<template>
  <div class="flex gap-x-14 mt-6">
    <div class="hidden lg:block max-w-sm w-full">
      <img src="/img/skill.png" alt="" class="h-auto w-full" />
    </div>

    <div class="grid lg:grid-cols-3 gap-4">
      <SkillItem>
        <template v-slot:title>Languages</template>
        <template v-slot:item>
          <li v-for="(lang, index) of languages" :key="index">{{ lang }}</li>
        </template>
      </SkillItem>

      <div class="grid gap-4 h-fit">
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
      </div>

      <div class="grid gap-4 h-fit">
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
    </div>
  </div>
</template>

<script>
import SkillItem from './SkillItem.vue'

import { skills } from './../../db.json'

export default {
  components: {
    SkillItem
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
