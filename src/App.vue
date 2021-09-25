<template>
  <div>{{ NODE_ENV }}</div>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  <HelloTsx msg="Welcome to Your Vue.js + TSX" />
</template>

<script lang="ts">
// import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import HelloTsx from './components/hello';
import { defineComponent } from 'vue';

// @Options({
//   components: {
//     HelloWorld,
//   },
// })
// export default class App extends Vue {

// }
export default defineComponent({
  data: () => ({
    NODE_ENV: process.env.NODE_ENV
  }),
  components: {
    HelloWorld,
    HelloTsx
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
