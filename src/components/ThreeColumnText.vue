<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: 'three-column-text',
  props: {
    text: String
  }
}
</script>

<style scoped>
p {
  column-count: 3;
  text-align: justify;
  text-align-last: left;
}
</style>