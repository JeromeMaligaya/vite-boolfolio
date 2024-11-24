<script>
import axios from 'axios';
import ProjectsListItem from './ProjectsListItem.vue';
import AppLoader from './AppLoader.vue';

export default {
  name: "ProjectsList",
  data() { 
    return {
      apiUrl:"http://127.0.0.1:8000/api/projects",
      projectsList: [],
      loaded: false,
    };
  },
  components: {
    ProjectsListItem,
    AppLoader,
  },
  methods: {
    getProjects(){
        axios.get(this.apiUrl)
            .then(response => {
                console.log(response);
                this.projectsList = response.data.results
                console.log(this.projectsList);
                this.loaded = true;
              })
            .catch(function(error) {
            console.log(error);
            });

    },
    show(projectId){
      
        this.$router.push({name: "projects.show", params: {id: projectId}})
      
    }
    
  },
  created() {
    this.getProjects();
  }
};
</script>

<template>
  <section v-if="!loaded">
      <AppLoader />
  </section>

  <section class="container" v-else>
    <ul id="projects-list" class="list-unstyled row">
      <ProjectsListItem 
        v-for="project in projectsList" :key="project.id" :projectObj="project" @click="show(project.id)"
      />
    </ul>
  </section>
</template>

<style lang="scss" scoped>

</style>