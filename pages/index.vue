<template>
  <div class="container">
    <CBox
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <CHeading text-align="center" mb="4" size="2xl"> NetNote </CHeading>
      <CFlex justify="center" direction="column" align="center">
        <CInputGroup w="50vw" mb="10">
          <CInput placeholder="Type a topic name here" size="lg" />
          <CInputRightElement>
            <CIconButton aria-label="Search database" icon="arrow-forward" />
          </CInputRightElement>
        </CInputGroup>
        <Cbox mb="4">
          <CHeading size="lg" mb="4">
            Or choose from the following parent topics</CHeading
          >
          <CList text-align="center">
            <CListItem v-for="item in ParentTopicKeys" :key="item">
              <NuxtLink :to="'/parent_topics/' + item">
                {{ ParentTopics[item].Title }}
              </NuxtLink>
            </CListItem>
          </CList>
          <NuxtLink :to="'/authors/create_author'"> Create an author </NuxtLink>
        </Cbox>
      </CFlex>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CIconButton,
  CFlex,
  CHeading,
  CInput, CInputGroup, CInputRightElement,
  CList, CListItem
} from '@chakra-ui/vue'

import parentTopics from '../content/ptopics.json';

export default {
  // name: 'App',
  components: {
    CBox,
    CIconButton,
    CFlex,
    CHeading,
    CInput, CInputGroup, CInputRightElement,
    CList, CListItem
  },
    transition: {
    name: 'home',
    mode: 'out-in'
  },
  data () {
    return {
      ParentTopicKeys: Object.keys(parentTopics),
      ParentTopics: parentTopics,
    }
  }
}
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.1s;
}
.home-enter,
.home-leave-active {
  opacity: 0.3;
}
</style>
