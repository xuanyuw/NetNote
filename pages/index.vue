<template>
  <div class="container">
    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <CHeading text-align="center" mb="4"> NetNote </CHeading>
      <CFlex justify="center" direction="column" align="center">
        <CInputGroup w="50vw">
          <CInput placeholder="Type a topic name here" size="lg" />
          <CInputRightElement>
            <CIconButton aria-label="Search database" icon="arrow-forward" />
          </CInputRightElement>
        </CInputGroup>
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
} from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CBox,
    CIconButton,
    CFlex,
    CHeading,
    CInput, CInputGroup, CInputRightElement,
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  computed: {
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },
  methods: {
    showToast () {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true
      })
    }
  }
}
</script>
