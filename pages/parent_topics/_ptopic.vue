<template>
  <div class="container">
    <CBox text-align="center" h="30vh" bg="gray.50">
      <CHeading text-align="center" line-height="30vh" size="2xl">
        {{ ParentTopic.Title }}
      </CHeading>
    </CBox>

    <CBox
      d="flex"
      flex-dir="column"
      text-align="center"
      justify-content="center"
      align-items="center"
      m="10"
    >
      <c-grid
        template-columns="repeat(2, 2fr)"
        gap="2vw"
        justify-content="center"
        text-align="center"
        overflow="auto"
        w="70vw"
      >
        <c-grid-item col-span="1">
          <CHeading text-align="left" size="lg"> Keywords:</CHeading>
        </c-grid-item>
        <c-grid-item col-span="1">
          <CHeading text-align="left" size="lg"> Authors: </CHeading>
        </c-grid-item>
        <c-grid-item
          overflow="auto"
          border="1px"
          border-radius="md"
          border-color="gray.200"
          h="45vh"
        >
          <CList text-align="center" m="4">
            <CListItem
              v-for="item in Object.keys(ParentTopic.Children)"
              :key="item"
            >
              <NuxtLink :to="'/children_topics/' + item">
                {{ ChildrenTopic[item]['Title'] }}
              </NuxtLink>
            </CListItem>
          </CList>
        </c-grid-item>
        <c-grid-item
          overflow="auto"
          border="1px"
          border-radius="md"
          border-color="gray.200"
          h="45vh"
        >
          <CList text-align="center" m="4">
            <CListItem v-for="item in ParentTopic.RelatedAuthors" :key="item">
              <NuxtLink :to="'/authors/' + item">
                {{ Authors[item]['Name'] }}
              </NuxtLink>
            </CListItem>
          </CList>
        </c-grid-item>
      </c-grid>
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

import parentTopics from '../../content/ptopics.json';
import childrenTopics from '../../content/ctopics.json';
import authors from '../../content/authors.json';


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
          ChildrenTopic: childrenTopics,
          Authors: authors,
      };
  },
}
</script>
