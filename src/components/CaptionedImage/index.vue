<template>
  <div>
    <img :src="url" :alt="alt" :title="alt">
    <p>{{ caption }}</p>
  </div>
</template>

<script>
import { name } from './manifest.json'

export default {
  name,
  props: {
    url: String,
    alt: String,
    caption: String
  }
}
</script>

<style scoped>
div {
  position: relative;
}

img {
  width: 100%;
}

p {
  padding: .6em;
  margin: 1em;
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.70);
  border-radius: 3px;
}
</style>