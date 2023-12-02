<template>
  <div class="sticky top-0">
    <ul class="hidden absolute -left-28 md:flex flex-col items-center gap-y-4 z-50">
      <li>
        <div class="w-1 h-48 bg-gray"></div>
      </li>
      <li class="w-8">
        <a :href="github" target="_blank">
          <GithubIcon />
        </a>
      </li>
      <li class="w-8">
        <a :href="instagram" target="_blank">
          <InstagramIcon />
        </a>
      </li>
      <li class="w-8">
        <a :href="linkedin" target="_blank">
          <LinkedinIcon />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import GithubIcon from './icons/GithubIcon.vue'
import InstagramIcon from './icons/InstagramIcon.vue'
import LinkedinIcon from './icons/LinkedinIcon.vue'

import { social_media } from './../../db.json'

export default {
  components: {
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
  },
  data() {
    return {
      instagram: "",
      github: "",
      linkedin: "",
    }
  },
  mounted() {
    this.instagram = social_media.instagram
    this.github = social_media.github
    this.linkedin = social_media.linkedin
  }
}
</script>
