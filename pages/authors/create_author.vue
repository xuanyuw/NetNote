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
      <CHeading text-align="Left" size="2xl" m="10"> Add author </CHeading>
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
            <c-input id="Name" v-model="name" placeholder="Name" />
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
            <c-textarea
              id="RI"
              v-model="ri"
              h="20vh"
              placeholder="Research Interest"
            />
          </c-form-control>
        </c-grid-item>
      </c-grid>
      <c-button
        variant-color="gray"
        m="10"
        :disabled="!(name && org && ri)"
        @click="
          add_author()
          open()
        "
        >Save Info</c-button
      >
      <c-modal
        :is-open="isOpen"
        :on-close="close"
        :closeOnOverlayClick="false"
        is-centered
      >
        <c-modal-content ref="content">
          <c-modal-header>Info Saved Successfully! </c-modal-header>
          <c-modal-body>
            <Lorem add="2s" />
          </c-modal-body>
          <c-modal-footer>
            <c-button-group size="xs">
              <c-button
                ><NuxtLink :to="'/authors/' + newAuthor.key">
                  Author Page</NuxtLink
                ></c-button
              >
              <c-button>
                <NuxtLink :to="'/authors/all_authors'"> Author List </NuxtLink>
              </c-button>
              <c-button>
                <NuxtLink :to="'/'"> Home</NuxtLink>
              </c-button>
              <c-button
                @click="
                  close()
                  reloadPage()
                "
                >Add Another</c-button
              >
            </c-button-group>
          </c-modal-footer>
        </c-modal-content>
        <c-modal-overlay />
      </c-modal>
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
  CInput, CTextarea,
  CButton,
  CFormControl, CFormLabel,

} from '@chakra-ui/vue'


export default {
  name: 'ChildrenTopic',
  components: {
    CBox,
    CHeading,
    CInput, CTextarea,
    CButton,
    CFormControl, CFormLabel,

  },
  transition: {
    name: 'home',
    mode: 'out-in'
  },

  data() {
      return {
          newAuthor: {
            key:"",
            data: {},
          },
          show: true,
          name: "",
          org:"",
          ri:"",
          hidx:"",
          cite:"",
          isOpen: false,
          existingAuthorIds: [],
      };
  },
  created() {
    this.$axios.$get(`/api/author_ids`, {
      responseType: 'json',
    }).then(response => {this.existingAuthorIds = response});
  },
  methods: {
    add_author(){
      const key = document.getElementById("Name").value.toLowerCase().replace(/ /g,"_")
      this.newAuthor.key = key;
      this.newAuthor.data = {
        Name: this.name,
        Organization: this.org,
        HIndex: this.hidx,
        CitationNumber: this.cite,
        ResearchInterest: this.ri,
      }

      this.$axios.$post('/api/authors', this.newAuthor)
      // await this.$axios.$get('/api/authors?name=author1')
    },
     open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
    reloadPage() {
      window.location.reload();
    },
  }

}
</script>
