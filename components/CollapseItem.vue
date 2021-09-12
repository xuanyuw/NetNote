<template>
  <div>
    <c-accordion :allow-multiple="true" :default-index="[0]">
      <c-accordion-item>
        <c-accordion-header>
          <c-box flex="1" text-align="left">
            <CHeading text-align="left" size="sm">
              {{ ChildrenTopics[ct]['Title'] }}</CHeading
            >
            <NuxtLink :to="'/children_topics/' + ct">
              <c-text fontSize="xs" text-decoration="underline;"
                >> Go to this topic
              </c-text></NuxtLink
            >
          </c-box>
          <c-accordion-icon />
        </c-accordion-header>
        <c-accordion-panel pb="4">
          <CList text-align="center">
            <CListItem
              v-for="fname in ChildrenTopics[thisTopic].RelatedPtopics[item][
                ct
              ]"
              :key="fname"
            >
              {{ fname }}
            </CListItem>
          </CList>
        </c-accordion-panel>
      </c-accordion-item>
    </c-accordion>
  </div>
</template>

<script lang="js">
import {
  CAccordion, CAccordionItem, CAccordionHeader, CAccordionPanel, CAccordionIcon,
  CList, CListItem,
  CHeading,CText
} from '@chakra-ui/vue'

import childrenTopics from '../content/ctopics.json';


export default {
  name: 'ChildrenTopic',
  components: {
    CAccordion, CAccordionItem, CAccordionHeader, CAccordionPanel, CAccordionIcon,
    CList, CListItem,
    CHeading,CText
  },
  props: {
      ct: String,
      item: String,
      thisTopic:String},
  data() {
      return {
          ChildrenTopics: childrenTopics,
      };
  },

}
</script>
