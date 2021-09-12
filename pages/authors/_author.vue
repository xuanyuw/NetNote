<template>
  <div class="container">
    <CBox text-align="center" h="30vh" bg="gray.50">
      <CHeading text-align="center" line-height="30vh" size="2xl">
        {{ thisAuthor.Name }}
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
        template-columns="repeat(6, 6fr)"
        justify-content="center"
        text-align="center"
        overflow="auto"
        w="70vw"
      >
        <c-grid-item
          row-span="1"
          col-span="2"
          overflow="auto"
          border="1px"
          border-color="gray.200"
        >
          <CHeading text-align="left" size="lg" m="4"> Organization:</CHeading>
          <CHeading text-align="center" size="md" m="4">
            {{ thisAuthor.Organization }}</CHeading
          >
        </c-grid-item>
        <c-grid-item
          row-span="1"
          col-span="2"
          overflow="auto"
          border="1px"
          border-color="gray.200"
        >
          <CHeading text-align="left" size="lg" m="4"> H-index: </CHeading>
          <CHeading text-align="center" size="md" mb="4">
            {{ thisAuthor.HIndex }}</CHeading
          >
        </c-grid-item>
        <c-grid-item
          row-span="1"
          col-span="2"
          overflow="auto"
          border="1px"
          border-color="gray.200"
        >
          <CHeading text-align="left" size="lg" m="4">
            # of Citations:
          </CHeading>
          <CHeading text-align="center" size="md" mb="4">
            {{ thisAuthor.CitationNumber }}</CHeading
          >
        </c-grid-item>
        <c-grid-item overflow="auto" col-span="3" text-align="left" m="4">
          <CHeading text-align="left" size="lg"> Research Interest: </CHeading>
        </c-grid-item>
        <c-grid-item overflow="auto" col-span="3" text-align="left" m="4">
          <CHeading text-align="left" size="lg"> Related Notes: </CHeading>
        </c-grid-item>
        <c-grid-item
          overflow="auto"
          col-span="3"
          text-align="left"
          ml="4"
          mr="4"
          mb="4"
        >
          <p>
            {{ thisAuthor.ResearchInterest }}
          </p>
        </c-grid-item>

        <c-grid-item
          overflow="auto"
          border="1px"
          border-radius="md"
          border-color="gray.200"
          col-span="3"
        >
          <c-box w="25vw" m="3">
            <c-box>
              <c-tabs variant="soft-rounded" variant-color="gray" mt="4" mb="4">
                <c-tab-list>
                  <c-tab
                    v-for="item in Object.keys(thisAuthor.RelatedNotes)"
                    :key="item"
                    >{{ ParentTopics[item]['Title'] }}</c-tab
                  >
                </c-tab-list>

                <c-tab-panels>
                  <c-tab-panel
                    v-for="item in Object.keys(thisAuthor.RelatedNotes)"
                    :key="item"
                  >
                    <CList text-align="center" mt="4">
                      <CListItem
                        v-for="ct in Object.keys(thisAuthor.RelatedNotes[item])"
                        :key="ct"
                      >
                        <c-accordion
                          :allow-multiple="true"
                          :default-index="[0]"
                        >
                          <c-accordion-item>
                            <c-accordion-header>
                              <c-box flex="1" text-align="left">
                                {{ ChildrenTopics[ct]['Title'] }}
                              </c-box>
                              <c-accordion-icon />
                            </c-accordion-header>
                            <c-accordion-panel pb="4">
                              <CList text-align="center">
                                <CListItem
                                  v-for="fname in ChildrenTopics[ct].Members"
                                  :key="fname"
                                >
                                  {{ fname }}
                                </CListItem>
                              </CList>
                            </c-accordion-panel>
                          </c-accordion-item>
                        </c-accordion>
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
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CHeading,
  CAccordion, CAccordionItem, CAccordionHeader, CAccordionPanel, CAccordionIcon,

} from '@chakra-ui/vue'

import authors from '../../content/authors.json';
import childrenTopics from '../../content/ctopics.json';
import parentTopics from '../../content/ptopics.json';


export default {
  name: 'ParentTopic',
  components: {
    CBox,
    CHeading,
    CAccordion, CAccordionItem, CAccordionHeader, CAccordionPanel, CAccordionIcon,

  },
  data() {
      return {
          thisAuthor: authors[this.$route.params.author],
          ChildrenTopics: childrenTopics,
          ParentTopics: parentTopics,
      };
  },
}
</script>
