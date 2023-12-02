<template>
  <footer>
    <hr class="max-w-screen w-full absolute left-0" />
    <div class="flex flex-col md:flex-row justify-between gap-y-6 pt-8 text-center md:text-left">
      <div>
        <div>
          <span class="font-medium text-white me-6">Shofistwn</span>
          <a href="mailto:shofistwn@gmail.com">shofistwn@gmail.com</a>
        </div>
        <p class="text-white mt-2 lg:mt-4">Full-stack web developer</p>
      </div>

      <div>
        <h3 class="text-2xl font-medium">Social Media</h3>

        <ul class="flex justify-center md:justify-start gap-x-3 mt-2 lg:mt-4">
          <li class="w-6">
            <a :href="github" target="_blank">
              <GithubIcon />
            </a>
          </li>
          <li class="w-6">
            <a :href="instagram" target="_blank">
              <InstagramIcon />
            </a>
          </li>
          <li class="w-6">
            <a :href="linkedin" target="_blank">
              <LinkedinIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <p class="text-center mt-12 pb-8">Design by <a href="https://www.figma.com/community/file/1164933568884615740" target="_blank">Elias</a>. Made by Shofi.</p>
  </footer>
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
