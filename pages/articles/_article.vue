<template>
  <div>
    <Toolbar></Toolbar>
    <CBox justify-content="center" text-align="center" pt="12vh">
      <component :is="postComponent" class="content mx-5 markdown-body" />
    </CBox>
  </div>
</template>

<script>
import { CBox, CHeading } from '@chakra-ui/vue'

export default {
  components: {
    CBox,
    CHeading,
  },
  transition: {
    name: 'home',
    mode: 'out-in',
  },
  data() {
    return {
      author: '',
      postComponent: null,
    }
  },
  mounted() {
    import(`~/content/${this.$route.params.article}.md`).then((m) => {
      this.author = m.attributes.author
      this.postComponent = m.vue.component
    })
  },
}
</script>
