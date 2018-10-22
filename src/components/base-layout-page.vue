<template>
  <main
    class="content"
    role="main"
    style="min-height: 75px"
  >
  <article class="post">
    <div class="inner">
      <section class="post-content">
        <slot />
      </section>
      <slot name="after-content-section"></slot>
    </div>
  </article>
</main>
</template>
