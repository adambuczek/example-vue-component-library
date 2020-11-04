<template>
  <p>{{ text }}</p>
</template>

<script>
import { name } from './manifest.json'

export default {
  name,
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