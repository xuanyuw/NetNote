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
        <c-popover
          initialFocusRef="#closeButton"
          placement="bottom"
          v-slot="{ onClose }"
        >
          <c-popover-trigger>
            <c-button variant-color="red" size="sm" m="2">Delete</c-button>
          </c-popover-trigger>
          <c-popover-content
            z-index="4"
            color="black"
            background-color="#DCDCDC"
            border-color="#DCDCDC"
          >
            <c-popover-header pt="4" font-weight="bold" border="0">
              Deleting this Author Info
            </c-popover-header>
            <c-popover-arrow color="#DCDCDC" />
            <c-popover-body> This operation is not reversible. </c-popover-body>
            <c-popover-footer
              border="0"
              d="flex"
              align-items="center"
              justify-content="space-between"
              pb="4"
            >
              <c-button-group size="sm">
                <c-button
                  variant-color="red"
                  @click="
                    delete_author(index)
                    reloadPage()
                  "
                  >Delete</c-button
                >
                <c-button
                  id="closeButton"
                  variant-color="green"
                  @click="onClose"
                >
                  Cancel
                </c-button>
              </c-button-group>
            </c-popover-footer>
          </c-popover-content>
        </c-popover>
      </c-grid-item>
    </c-grid>

    <CBox
      d="flex"
      flex-dir="column"
      justify-content="center"
      text-align="center"
    >
      <NuxtLink :to="'/authors/create_author'"> Create an author </NuxtLink>
      <NuxtLink :to="'/'"> Home</NuxtLink>
    </CBox>
  </div>
</template>

<script lang="js">


import {
  CBox,
  CHeading,
  CButton,
  CGrid, CGridItem,
  CPopover,
  CPopoverTrigger,
  CPopoverContent,
  CPopoverHeader,
  CPopoverBody,
  CPopoverFooter,
  CPopoverArrow,

} from '@chakra-ui/vue';



export default {
  components: {
    CBox,
    CHeading,
    CButton,
    CGrid, CGridItem,
    CPopover,
    CPopoverTrigger,
    CPopoverContent,
    CPopoverHeader,
    CPopoverBody,
    CPopoverFooter,
    CPopoverArrow,
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
  },
  methods:{
    delete_author(index){
      this.$axios.$delete('/api/authors', {data:{key:index}});
    },
    reloadPage() {
      window.location.reload();
    },
  }

}
</script>
