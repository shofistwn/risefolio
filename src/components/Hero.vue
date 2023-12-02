<template>
  <section class="grid lg:grid-cols-2 items-center gap-x-4 gap-y-8">
    <div>
      <h1 class="text-3xl font-semibold">
        Shofi is a <span class="text-primary">blogger</span> and <span class="text-primary">full-stack web developer</span>
      </h1>
      <p class="my-8">Crafting responsive websites where technologies seamlessly meet creativity</p>
      <RouterLink :to="{ name: 'contact' }" class="btn btn-primary">Contact me!!</RouterLink>
    </div>

    <div>
      <img src="/img/hero.png" alt="" class="max-w-md w-full h-auto mx-auto" />
      <div class="border border-1 border-gray py-2 px-3 w-fit mx-auto flex items-center gap-x-3">
        <div class="p-2 bg-primary w-fit h-fit"></div>
        Currently working on <span class="text-white font-semibold">{{ working_at }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import { working_at } from './../../db.json'

export default {
  data() {
    return {
      working_at: ''
    }
  },
  mounted() {
    this.working_at = working_at
  }
}
</script>