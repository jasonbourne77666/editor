<template>
  <div class="app-container" v-if="!noFooter">
    <a-layout>
      <a-layout-header>
        <router-link to="/">home</router-link>
        <router-link to="/template/11">template</router-link>
        <router-link to="/editor">editor</router-link>
      </a-layout-header>
      <a-layout-content>
        <h1>{{ noFooter ? '1' : '2' }}</h1>
        <router-view />
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
  <div class="app-container" v-else>
    <router-view />
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { defineComponent, computed, watch } from 'vue';
export default defineComponent({
  data: () => ({
    NODE_ENV: process.env.NODE_ENV
  }),
  setup() {
    const route = useRoute();
    const noFooter = computed(() => route.meta.noFooter);
    watch(noFooter, newV => {
      console.log(newV);
    });
    return { noFooter };
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
