<template>
  <div class="container">
    <CBox text-align="center" h="30vh" bg="gray.50">
      <CHeading text-align="center" line-height="30vh" size="2xl">
        All Authors
      </CHeading>
    </CBox>

    <c-grid m="10" gap="6" align="center">
      <c-grid-item v-for="(value, index) in allAuthors" :key="index">
        <NuxtLink :to="'/authors/' + index"> {{ value.Name }}</NuxtLink>
        <c-button variant-color="green" size="sm" m="2"
          ><NuxtLink :to="'/authors/update/' + index"
            >Edit Info</NuxtLink
          ></c-button
        >
        <c-button variant-color="red" size="sm" m="2">Delete</c-button>
      </c-grid-item>
    </c-grid>

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
  CHeading,
  CButton,
  CGrid, CGridItem

} from '@chakra-ui/vue';



export default {
  components: {
    CBox,
    CHeading,
    CButton,
    CGrid, CGridItem
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
