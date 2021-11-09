<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  methods: {
    getFrontmatter() {
      const md = require('markd-it')().use(
        require('markdown-it-front-matter'),
        function (fm) {
          console.log(fm)
        }
      )
    },
  },
}
</script>
