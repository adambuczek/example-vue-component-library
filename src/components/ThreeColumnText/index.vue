<template>
  <p>{{ text }}</p>
</template>

<script>
import { name, props } from './manifest.json'

export default {
  name,
  props
}
</script>

<style scoped>
p {
  column-count: 3;
  text-align: justify;
  text-align-last: left;
}
</style>