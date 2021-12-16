<template>
  <div>
    <CBox
      position="fixed"
      width="100%"
      height="8vh"
      backgroundColor="rgba(255, 255, 255)"
      backdropFilter="saturate(180%) blur(5px)"
      boxShadow="rgba(0, 0, 0, 0.45) 0px 10px 20px -20px;"
    >
      <CHeading m="2"> NetNote </CHeading>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox, CHeading
} from '@chakra-ui/vue'
export default {
    components: {
        CBox, CHeading
    }
}
</script>
