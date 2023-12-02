<template>
  <div class="p-4 border border-1 border-gray">
    <h4 class="font-semibold">Message me here</h4>

    <ul class="flex flex-col gap-y-3 mt-4">
      <li class="group">
        <a
          :href="instagram"
          target="_blank"
          class="flex items-center gap-x-3"
        >
          <div class="w-6">
            <InstagramIcon />
          </div>
          shofistwn
        </a>
      </li>
      <li class="group">
        <a :href="email" class="flex items-center gap-x-3">
          <div class="w-6">
            <GmailIcon />
          </div>
          shofistwn@gmail.com
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import GmailIcon from './icons/GmailIcon.vue'
import InstagramIcon from './icons/InstagramIcon.vue'

import { social_media } from './../../db.json'

export default {
  components: {
    GmailIcon,
    InstagramIcon,
  },
  data() {
    return {
      instagram: '',
      email: '',
    }
  },
  mounted() {
    this.instagram = social_media.instagram
    this.email = `mailto:${social_media.email}`
  }
}
</script>
