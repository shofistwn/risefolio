<template>
  <div class="grid lg:grid-cols-2 mt-6">
    <div>
      <p>Hello, i’m Shofi!</p>
      <br />
      <p>
        I'm a self-taught full-stack web developer based in East Java, Indonesia. My focus is on creating responsive
        websites from scratch and turning them into modern, user-friendly experiences.
      </p>
      <br />
      <p>
        For over a year, I've passionately crafted responsive websites from scratch, collaborating with various clients to
        establish their online presence. Eager to stay updated on the latest technologies and frameworks, I am committed
        to continuous learning and improvement.
      </p>

      <div class="mt-8">
        <slot></slot>
      </div>
    </div>

    <div class="hidden lg:block max-w-xs ms-auto">
      <img src="/img/about-me.png" alt="" class="h-auto w-full" />
    </div>
  </div>
</template>
