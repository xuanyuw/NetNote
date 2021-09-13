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
          <c-input variant="outline" placeholder="Name" />
        </c-grid-item>
        <c-grid-item overflow="auto">
          <c-input variant="outline" placeholder="Organization" />
        </c-grid-item>
        <c-grid-item>
          <CHeading text-align="left" size="lg"> H-index</CHeading>
        </c-grid-item>
        <c-grid-item>
          <CHeading text-align="left" size="lg"> # of Citations</CHeading>
        </c-grid-item>
        <c-grid-item overflow="auto">
          <c-input variant="outline" placeholder="H-index" />
        </c-grid-item>
        <c-grid-item overflow="auto">
          <c-input variant="outline" placeholder="# of Citations" />
        </c-grid-item>
        <c-grid-item col-span="2">
          <CHeading text-align="left" size="lg"> Research Interest</CHeading>
        </c-grid-item>
        <c-grid-item overflow="auto" col-span="2">
          <c-textarea h="20vh" placeholder="Research Interest" />
        </c-grid-item>
      </c-grid>
      <c-button variant-color="gray" m="10">Save Info</c-button>
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
}
</script>
