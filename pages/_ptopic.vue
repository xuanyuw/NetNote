<template>
  <div class="container">
    <CBox
      d="flex"
      w="100vw"
      h="90vh"
      flex-dir="column"
      justify-content="center"
      text-align="center"
    >
      <CHeading text-align="center" mb="4" size="2xl">
        {{ ParentTopic.Title }}
      </CHeading>
      <CList text-align="center">
        <CListItem v-for="item in ParentTopic.Children" :key="item">
          {{ item }}
        </CListItem>
      </CList>
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
  CList, CListItem
} from '@chakra-ui/vue'

import parentTopics from '../content/ptopics.json';


export default {
  name: 'ParentTopic',
  components: {
    CBox,
    CHeading,
    CList, CListItem
  },
  data() {
      return {
          ParentTopic: parentTopics[this.$route.params.ptopic],
      };
  },
}
</script>
