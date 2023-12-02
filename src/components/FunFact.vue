<template>
  <section class="mt-20">
    <SectionTitle>
      <template v-slot:title>my-fun-facts</template>
    </SectionTitle>

    <div class="flex mt-6">
      <div class="max-w-2xl">
        <div class="flex flex-wrap gap-4">
          <FunFactItem v-for="(fact, index) of facts" :key="index">{{ fact }}</FunFactItem>
        </div>
      </div>

      <div class="flex-1 hidden lg:block">
        <img src="/img/fun-fact.png" alt="" class="h-auto w-fit mx-auto" />
      </div>
    </div>
  </section>
</template>

<script>
import FunFactItem from './FunFactItem.vue'
import SectionTitle from './SectionTitle.vue'

export default {
  props: {
    facts: {
      type: Object
    }
  },
  components: {
    FunFactItem,
    SectionTitle,
  }
}
</script>
