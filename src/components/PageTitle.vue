<template>
  <h1>
    {{ text }}
  </h1>
</template>

<script>
export default {
  name: 'page-title',
  props: {
    text: String
  }
}
</script>

<style scoped>
h1 {
  text-align-last: left;
  font-family: serif;
  font-size: 32px;
}
</style>