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
        <c-grid-item>
          <CHeading text-align="left" size="lg"> Name</CHeading>
        </c-grid-item>
        <c-grid-item>
          <CHeading text-align="left" size="lg"> Organization</CHeading>
        </c-grid-item>
        <c-grid-item overflow="auto">
          <c-input id="Name" variant="outline" placeholder="Name" />
        </c-grid-item>
        <c-grid-item overflow="auto">
          <c-input id="Org" variant="outline" placeholder="Organization" />
        </c-grid-item>
        <c-grid-item>
          <CHeading text-align="left" size="lg"> H-index</CHeading>
        </c-grid-item>
        <c-grid-item>
          <CHeading text-align="left" size="lg"> # of Citations</CHeading>
        </c-grid-item>
        <c-grid-item overflow="auto">
          <c-input id="Hidx" variant="outline" placeholder="H-index" />
        </c-grid-item>
        <c-grid-item overflow="auto">
          <c-input id="Cite" variant="outline" placeholder="# of Citations" />
        </c-grid-item>
        <c-grid-item col-span="2">
          <CHeading text-align="left" size="lg"> Research Interest</CHeading>
        </c-grid-item>
        <c-grid-item overflow="auto" col-span="2">
          <c-textarea id="RI" h="20vh" placeholder="Research Interest" />
        </c-grid-item>
      </c-grid>
      <c-button variant-color="gray" m="10" @click="add_author"
        >Save Info</c-button
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
import {
  CBox,
  CHeading,
  CInput, CTextarea,
  CButton
} from '@chakra-ui/vue'

import authors from '../../content/authors.json';


export default {
  name: 'ChildrenTopic',
  components: {
    CBox,
    CHeading,
    CInput, CTextarea,
    CButton
  },
  transition: {
    name: 'home',
    mode: 'out-in'
  },
  data() {
      return {
          Authors: authors,
          show: true
      };
  },
  methods: {
    add_author(event){
      const key = document.getElementById("Name").value.replace(/ /g,"_")
      console.log(document.getElementById("Hidx").value)
      console.log(document.getElementById("Cite").value)
      console.log(document.getElementById("RI").value)
      this.authors[key] = {
          Name: document.getElementById("Name").value,
          Organization: document.getElementById("Org").value,
          HIndex: document.getElementById("Hidx").value,
          CitationNumber: document.getElementById("Cite").value,
          ResearchInterest: document.getElementById("RI").value,
      };
      console.log(Object.keys(this.Authors))
    }
  },
}
</script>
