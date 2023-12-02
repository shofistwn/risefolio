<template>
  <nav class="relative flex justify-between items-center pt-8">
    <RouterLink class="font-bold text-white" :to="{ name: 'home' }"> Shofistwn </RouterLink>

    <ul class="hidden lg:flex lg:items-center lg:w-auto lg:space-x-8">
      <li v-for="link in menu" :key="link.name">
        <RouterLink :to="link.to" class="hover:font-medium hover:text-white"
          :class="{ active: isRouteActive(link.to.name) }">
          <span class="text-primary">#</span>{{ link.name }}
        </RouterLink>
      </li>
    </ul>

    <div class="lg:hidden">
      <button class="navbar-burger" @click="toggleMenu">
        <MenuOpenIcon />
      </button>
    </div>
  </nav>

  <div class="navbar-menu relative z-50 lg:hidden" v-if="isMenuOpen">
    <div class="navbar-backdrop fixed inset-0 shadow opacity-25"></div>
    <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-full py-6 px-4 md:px-36 bg-black overflow-y-auto">
      <div class="flex items-center mt-2 mb-8">
        <RouterLink class="mr-auto font-bold text-white" :to="{ name: 'home' }"> Shofistwn </RouterLink>
        <button class="navbar-close mb-3" @click="toggleMenu">
          <MenuCloseIcon />
        </button>
      </div>
      <div class="mt-8">
        <ul class="flex flex-col gap-y-8 text-3xl font-medium">
          <li v-for="link in menu" :key="link.name">
            <RouterLink :to="link.to" class="block hover:text-white" :class="{ active: isRouteActive(link.to.name) }">
              <span class="text-primary">#</span>{{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="mt-auto py-10">
        <div class="pt-6">
          <ul class="flex justify-center gap-x-6">
            <li class="w-12">
              <a :href="github" target="_blank">
                <GithubIcon />
              </a>
            </li>
            <li class="w-12">
              <a :href="instagram" target="_blank">
                <InstagramIcon />
              </a>
            </li>
            <li class="w-12">
              <a :href="linkedin" target="_blank">
                <LinkedinIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.active {
  @apply font-medium text-white;
}
</style>

<script>
import MenuOpenIcon from './icons/MenuOpenIcon.vue'
import MenuCloseIcon from './icons/MenuCloseIcon.vue'
import GithubIcon from './icons/GithubIcon.vue'
import InstagramIcon from './icons/InstagramIcon.vue'
import LinkedinIcon from './icons/LinkedinIcon.vue'

import { social_media } from './../../db.json'

export default {
  components: {
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    MenuOpenIcon,
    MenuCloseIcon
  },
  data() {
    return {
      instagram: "",
      github: "",
      linkedin: "",
      menu: [
        { name: 'home', to: { name: 'home' } },
        { name: 'works', to: { name: 'projects' } },
        { name: 'about-me', to: { name: 'about-me' } },
        { name: 'contact', to: { name: 'contact' } }
      ],
      isMenuOpen: false
    }
  },
  mounted() {
    this.instagram = social_media.instagram
    this.github = social_media.github
    this.linkedin = social_media.linkedin
  },
  methods: {
    isRouteActive(routeName) {
      return this.$route.name === routeName
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  },
  watch: {
    $route() {
      this.isMenuOpen = false
    }
  }
}
</script>
