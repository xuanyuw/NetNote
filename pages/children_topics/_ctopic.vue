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
        {{ ChildTopic.Title }}
      </CHeading>
      <c-grid w="1000px" template-columns="repeat(3, 1fr)" gap="6">
        <c-box w="100%" h="10">
          <CList text-align="center">
            <CListItem v-for="item in ChildTopic.Members" :key="item">
              {{ item }}
            </CListItem>
          </CList>
        </c-box>
        <c-box w="100%" h="10" />
        <c-box w="100%" h="10" />
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
