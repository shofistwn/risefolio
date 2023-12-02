<template>
  <div class="border border-1 border-gray w-fit lg:w-full h-fit">
    <h4 class="p-2">
      <slot name="title"></slot>
    </h4>

    <ul class="flex flex-wrap gap-2 p-2 border-t border-gray">
      <slot name="item"></slot>
    </ul>
  </div>
</template>
