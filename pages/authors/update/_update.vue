<template>
  <div class="container" w="100vw">
    <CBox
      d="flex"
      flex-dir="column"
      text-align="center"
      justify-content="center"
      align-items="center"
      m="10"
    >
      <CHeading text-align="Left" size="2xl" m="10"> Update Info </CHeading>
      <c-grid
        template-columns="repeat(2, 1fr)"
        gap="2vw"
        justify-content="center"
        overflow="auto"
        w="80vw"
      >
        <c-grid-item text-align="left">
          <c-form-control is-required>
            <c-form-label for="Name"> Name</c-form-label>
            <c-input id="Name" v-model="name" placeholder="Name"> </c-input>
          </c-form-control>
        </c-grid-item>
        <c-grid-item text-align="left">
          <c-form-control is-required>
            <c-form-label for="Org"> Organization</c-form-label>
            <c-input id="Org" v-model="org" placeholder="Organization" />
          </c-form-control>
        </c-grid-item>
        <c-grid-item text-align="left">
          <c-form-control>
            <c-form-label for="Hidx"> H-index</c-form-label>
            <c-input id="Hidx" v-model="hidx" placeholder="H-index" />
          </c-form-control>
        </c-grid-item>
        <c-grid-item text-align="left">
          <c-form-control>
            <c-form-label for="Cite"> # of Citations</c-form-label>
            <c-input id="Cite" v-model="cite" placeholder="# of Citations" />
          </c-form-control>
        </c-grid-item>
        <c-grid-item text-align="left" col-span="2">
          <c-form-control is-required>
            <c-form-label for="RI"> Research Interest</c-form-label>
            <c-input
              id="RI"
              v-model="ri"
              h="20vh"
              placeholder="Research Interest"
              col-span="2"
              overflow="auto"
            ></c-input>
          </c-form-control>
        </c-grid-item>
      </c-grid>
      <c-button
        variant-color="gray"
        m="10"
        :disabled="!(name && org && ri)"
        @click="add_author"
        >Update Info</c-button
      >
    </CBox>
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

// import * as fs from 'fs';

import {
  CBox,
  CHeading,
  CInput,
  CButton,
  CFormControl, CFormLabel,

} from '@chakra-ui/vue'


export default {
  name: 'ChildrenTopic',
  components: {
    CBox,
    CHeading,
    CInput,
    CButton,
    CFormControl, CFormLabel,

  },
  transition: {
    name: 'home',
    mode: 'out-in'
  },

  data() {
      return {
        currentAuthor: {},
        updatedAuthor:{},
        show: true,
        name: "",
        org:"",
        ri:"",
        hidx:"",
        cite:""
        }
  },
  created() {
    // const key = this.$route.params.author
    // console.log('in author.vue')
    this.$axios.$get(`/api/authors?id=${this.$route.params.update}`, {
      responseType: 'json',
    }).then(response => {
      this.currentAuthor = response;
      this.name = response.Name;
      this.org = response.Organization;
      this.ri = response.ResearchInterest;
      this.hidx = response.HIndex;
      this.cite = response.CitationNumber;
      });
  },
  methods: {
    add_author(event){
      const key = document.getElementById("Name").value.toLowerCase().replace(/ /g,"_")
      this.updatedAuthor.key = key;
      this.updatedAuthor.data = {
        Name: this.name,
        Organization: this.org,
        HIndex: this.hidx,
        CitationNumber: this.cite,
        ResearchInterest: this.ri,
      }

      this.$axios.$post('/api/authors', this.updatedAuthor)
    },
  },


}
</script>
