<template>
  <div>
    <PageTitle
      text="Page title looks like this"
    />
    <CaptionedImage
      url="https://picsum.photos/720/300"
      alt="This is alt and title"
      caption="This is a random image"
    />
    <ThreeColumnText
      text="Quaerat suscipit aut debitis sequi voluptas eum tenetur impedit. Est ducimus eos autem iste amet. Veritatis aperiam qui eveniet quam at est. Esse aliquid officiis incidunt reiciendis inventore voluptatibus ullam consequatur. Mollitia aut aut atque dicta quia. Dolores ut fugiat omnis maiores itaque omnis sed. Vel ut reiciendis ea distinctio quis occaecati. Ut quibusdam tempora nesciunt facere ab explicabo. Sed non enim expedita. Aut vel voluptas ad neque quae ex nulla rem. Sit omnis eius odio saepe."
    />
  </div>
</template>

<script>
import PageTitle from './components/PageTitle'
import CaptionedImage from './components/CaptionedImage'
import ThreeColumnText from './components/ThreeColumnText'

export default {
  name: 'App',
  components: {
    PageTitle,
    CaptionedImage,
    ThreeColumnText
  }
}
</script>

<style>
* {
  box-sizing: content-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: min(720px, 90%)
}
</style>
