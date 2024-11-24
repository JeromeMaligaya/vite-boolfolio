<script>
import ProjectsListItem from '../components/ProjectsListItem.vue';
import AppLoader from '../components/AppLoader.vue';

import axios from 'axios';

export default {
  name:"AppSingleProject",  
  data() {
    return {
      apiUrl: "http://127.0.0.1:8000/api/projects",
      singleProject: null,
    };
  },
  components: {
    ProjectsListItem,
    AppLoader,
  },
  methods: {
    getSingleProject(){
        axios.get(`${this.apiUrl}/${this.$route.params.id}`)
        .then(response => {
          console.log(response.data.result)
          this.singleProject = response.data.result;
        })
        .catch(function (error) {
            console.log(error);
        });
    }
  },
  created(){
    this.getSingleProject();
  }
};
</script>

<template>
  
</template>

<style lang="scss" scoped>
  
</style>