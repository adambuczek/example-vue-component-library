<template>
  <h1>
    {{ text }}
  </h1>
</template>

<script>
import { name, props } from './manifest.json'

export default {
  name,
  props
}
</script>

<style scoped>
h1 {
  text-align-last: left;
  font-family: serif;
  font-size: 32px;
}
</style>