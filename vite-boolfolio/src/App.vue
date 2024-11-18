<script>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return {
      
    };
  },
  components: {
    AppHeader,
  },
  methods: {
    
  },
}
</script>

<template>
  <AppHeader />
  
  <RouterView /> 
</template>

<style lang="scss">
@use "./style/general.scss" as *;

</style>