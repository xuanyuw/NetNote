<template>
  <div class="container" w="100vw">
    <CBox text-align="center" h="40vh" bg="gray.50">
      <CHeading text-align="center" line-height="40vh" size="2xl">
        {{ ChildTopic.Title }}
      </CHeading>
    </CBox>
    <CBox
      d="flex"
      h="60vh"
      flex-dir="column"
      justify-content="center"
      align-items="center"
      text-align="center"
      m="10"
    >
      <c-grid
        template-columns="repeat(3, 3fr)"
        gap="10"
        justify-content="center"
        text-align="center"
        overflow="auto"
      >
        <c-box w="25vw" overflow="auto">
          <CList text-align="center">
            <CListItem v-for="item in ChildTopic.Members" :key="item">
              {{ item }}
            </CListItem>
          </CList>
        </c-box>
        <c-box w="25vw" overflow="auto">
          <CList text-align="center">
            <CListItem v-for="item in ChildTopic.Members" :key="item">
              {{ item }}
            </CListItem>
          </CList>
        </c-box>
        <c-box w="25vw" overflow="auto">
          <CList text-align="center">
            <CListItem v-for="item in ChildTopic.Members" :key="item">
              {{ item }}
            </CListItem>
          </CList>
        </c-box>
      </c-grid>
    </CBox>
    <CBox
      d="flex"
      flex-dir="column"
      justify-content="center"
      text-align="center"
    >
      <NuxtLink :to="'/'"> Home</NuxtLink>
      <NuxtLink :to="'/parent_topics/' + ChildTopic.Parent">
        Go to parent
      </NuxtLink>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CHeading,
  CList, CListItem
} from '@chakra-ui/vue'

// import parentTopics from '../content/ptopics.json';
import childrenTopics from '../../content/ctopics.json';


export default {
  name: 'ChildrenTopic',
  components: {
    CBox,
    CHeading,
    CList, CListItem
  },
  data() {
      return {

          ChildTopic: childrenTopics[this.$route.params.ctopic]
      };
  },
}
</script>
