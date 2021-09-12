<template>
  <div class="container" w="100vw">
    <CBox text-align="center" h="30vh" bg="gray.50">
      <CHeading text-align="center" line-height="30vh" size="2xl">
        {{ ChildTopic.Title }}
      </CHeading>
    </CBox>
    <CBox d="flex" h="60vh" flex-dir="column" text-align="center" m="10">
      <c-grid
        template-columns="repeat(3, 3fr)"
        gap="2vw"
        justify-content="center"
        text-align="center"
        overflow="auto"
      >
        <c-grid-item row-span="1" mb="0">
          <CHeading text-align="left" size="lg"> Member Notes</CHeading>
        </c-grid-item>
        <c-grid-item row-span="1">
          <CHeading text-align="left" size="lg"> Authors </CHeading>
        </c-grid-item>
        <c-grid-item row-span="1">
          <CHeading text-align="left" size="lg"> Related topics </CHeading>
        </c-grid-item>
        <c-grid-item
          row-span="6"
          overflow="auto"
          border="1px"
          border-radius="md"
          border-color="gray.200"
          h="50vh"
        >
          <c-box w="25vw" m="3">
            <CList text-align="center">
              <CListItem v-for="item in ChildTopic.Members" :key="item">
                {{ item }}
              </CListItem>
            </CList>
          </c-box>
        </c-grid-item>
        <c-grid-item
          row-span="6"
          overflow="auto"
          border="1px"
          border-radius="md"
          border-color="gray.200"
          h="50vh"
        >
          <c-box w="25vw" m="3">
            <CList text-align="center">
              <CListItem v-for="item in ChildTopic.RelatedAuthors" :key="item">
                <NuxtLink :to="'/authors/' + item">{{
                  Authors[item].Name
                }}</NuxtLink>
              </CListItem>
            </CList>
          </c-box>
        </c-grid-item>
        <c-grid-item
          row-span="6"
          overflow="auto"
          border="1px"
          border-radius="md"
          border-color="gray.200"
          h="50vh"
        >
          <c-box w="25vw" m="3">
            <c-box>
              <c-tabs variant="soft-rounded" variant-color="gray" mt="4" mb="4">
                <c-tab-list>
                  <c-tab
                    v-for="item in Object.keys(ChildTopic.RelatedPtopics)"
                    :key="item"
                    >{{ ParentTopics[item]['Title'] }}</c-tab
                  >
                </c-tab-list>

                <c-tab-panels>
                  <c-tab-panel
                    v-for="item in Object.keys(ChildTopic.RelatedPtopics)"
                    :key="item"
                  >
                    <CList text-align="center" mt="4">
                      <CListItem
                        v-for="ct in Object.keys(
                          ChildTopic.RelatedPtopics[item]
                        )"
                        :key="ct"
                      >
                        <CollapseItem
                          :ct="ct"
                          :item="item"
                          :this-topic="$route.params.ctopic"
                        ></CollapseItem>
                      </CListItem>
                    </CList>
                  </c-tab-panel>
                </c-tab-panels>
              </c-tabs>
            </c-box>
          </c-box>
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
  CList, CListItem,
  CTabs, CTabList, CTabPanels, CTab, CTabPanel,
} from '@chakra-ui/vue'

import parentTopics from '../../content/ptopics.json';
import childrenTopics from '../../content/ctopics.json';
import CollapseItem from '../../components/CollapseItem.vue';
import authors from '../../content/authors.json';


export default {
  name: 'ChildrenTopic',
  components: {
    CBox,
    CHeading,
    CList, CListItem,
    CTabs, CTabList, CTabPanels, CTab, CTabPanel,
    CollapseItem
  },
  data() {
      return {
          ChildTopic: childrenTopics[this.$route.params.ctopic],
          ChildrenTopics: childrenTopics,
          ParentTopics: parentTopics,
          Authors: authors,
          show: true
      };
  },
}
</script>
