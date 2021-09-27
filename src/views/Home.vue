<template>
  <div>home</div>
  <a-button type="primary" @click="loginFc">
    {{ isLogin ? '等于ture' : '等于false' }}
  </a-button>
  <br />
  <a-button type="primary" @click="loginOut">
    {{ !isLogin ? '等于ture' : '等于false' }}
  </a-button>
  <div>{{ JSON.stringify(testData) }}</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { GlobalDataProps } from '@/store';
export default defineComponent({
  setup() {
    const store = useStore<GlobalDataProps>();
    const testData = computed(() => store.state.templates);
    const isLogin = computed(() => store.state.user.isLogin);
    const loginFc = () => store.commit('login');
    const loginOut = () => store.commit('loginOut');

    return { testData, isLogin, loginFc, loginOut };
  },
});
</script>

<style></style>
