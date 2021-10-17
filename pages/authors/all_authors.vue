<template>
  <div class="container">
    <CBox text-align="center" h="30vh" bg="gray.50">
      <CHeading text-align="center" line-height="30vh" size="2xl">
        All Authors
      </CHeading>
    </CBox>
    <c-list
      styleType="disc"
      justify-content="center"
      text-align="left"
      display="flex"
      gridGap="2"
      flex-direction="column"
      flex-wrap="wrap"
      h="50vh"
      m="10"
      overflow="auto"
    >
      <c-list-item v-for="(value, index) in allAuthors" :key="index">
        <NuxtLink :to="'/authors/' + index"> {{ value.Name }}</NuxtLink>
      </c-list-item>
    </c-list>
    <CBox
      d="flex"
      flex-dir="column"
      justify-content="center"
      text-align="center"
    >
      <NuxtLink :to="'/'"> Home</NuxtLink>
    </CBox>
  </div>
</template>

<script lang="js">


import {
  CBox,
  CHeading

} from '@chakra-ui/vue';



export default {
  components: {
    CBox,
    CHeading
  },
  transition: {
    name: 'home',
    mode: 'out-in'
  },
  data() {return{
      allAuthors: {},
  }},
    created() {
    // const key = this.$route.params.author
    // console.log('in author.vue')
    this.$axios.$get(`/api/all_authors`, {
      responseType: 'json',
    }).then(response => {this.allAuthors = response});
}
}
</script>
