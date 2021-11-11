<template>
  <article>
    <component :is="singlePostComponent" />
  </article>
</template>

<script>
export default {
  async asyncData({ params }) {
    try {
      console.info(params.content)
      const post = await import(`~/content/${params.content}.md`)

      return {
        author: post.attributes.author,
        singlePostComponent: post.vue.component,
      }
    } catch (err) {
      console.debug(err)
      return false
    }
  },
}
</script>
