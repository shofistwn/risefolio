<template>
  <div class="border border-1 border-gray">
    <slot name="thumbnail"></slot>

    <ul class="flex flex-wrap gap-2 p-2 border-y border-gray">
      <slot name="stacks"></slot>
    </ul>

    <div class="p-4">
      <h3 class="text-2xl font-medium">
        <slot name="title"></slot>
      </h3>
      <p class="my-4">
        <slot name="desc"></slot>
      </p>

      <div class="flex gap-x-4">
        <slot name="live"></slot>
        <slot name="repo"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    stacks: {
      type: Object,
    },
    desc: {
      type: String
    }
  }
}
</script>
