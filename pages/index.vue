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
        <CBox mb="4">
          <CHeading size="lg" mb="4">
            Or choose from the following parent topics</CHeading
          >
          <CList text-align="center">
            <CListItem v-for="item in ParentTopicKeys" :key="item">
              <NuxtLink :to="'/parent_topics/' + item">
                {{ ParentTopics[item].Title }}
              </NuxtLink>
            </CListItem>
            <CListItem>
              <NuxtLink :to="'/authors/create_author'">
                Create an author
              </NuxtLink>
            </CListItem>
            <CListItem>
              <NuxtLink :to="'/authors/all_authors'">
                View author list
              </NuxtLink>
            </CListItem>
          </CList>
          <ul>
            <li v-for="post in posts" :key="post.attributes.author">
              <NuxtLink :to="`/articles/${post.key}`">{{ post.key }}</NuxtLink>
              <!-- <a :href="`/articles/${post.key}`">{{ post.key }}</a> -->
            </li>
          </ul>
        </CBox>
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

  asyncData() {
    const resolve = require.context("~/content/", true, /\.md$/);
    const imports = resolve.keys().map(key => {
      const [, ] = key.match(/\/(.+)\.md$/);
      return {...resolve(key), key:key.slice(2, -3)};
    });
    return {
      posts: imports
    };
  },
  data () {
    return {
      ParentTopicKeys: Object.keys(parentTopics),
      ParentTopics: parentTopics,
      prefix: 'content'
    }
  },
  methods: {

  },
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
