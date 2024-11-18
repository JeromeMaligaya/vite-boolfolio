<script>
import axios from 'axios';

export default {
  name: "ProjectsLIst",
  data() { 
    return {
      apiUrl:"http://127.0.0.1:8000/api/projects",
      projectsList: [],
    };
  },
  components: {
    
  },
  methods: {
    getProjects(){
        axios.get(this.apiUrl)
            .then(response => {
                console.log(response);
                this.projectsList = response.data.results
            })
            .catch(function(error) {
            console.log(error);
            });

    }
  },
  created() {
    this.getProjects();
  }
};
</script>

<template>

</template>

<style lang="scss" scoped>
  
</style>