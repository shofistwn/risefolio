<template>
  <div class="flex justify-between items-baseline">
    <h2 class="text-3xl font-medium">
      <span class="text-primary">#</span><slot name="title"></slot>
    </h2>
    <div>
      <slot name="link"></slot>
    </div>
  </div>
</template>
