<script>
import axios from 'axios';
import ProjectsListItem from './ProjectsListItem.vue';

export default {
  name: "ProjectsLIst",
  data() { 
    return {
      apiUrl:"http://127.0.0.1:8000/api/projects",
      projectsList: [],
    };
  },
  components: {
    ProjectsListItem,
  },
  methods: {
    getProjects(){
        axios.get(this.apiUrl)
            .then(response => {
                console.log(response);
                this.projectsList = response.data.results
                console.log(this.projectsList);
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
  <section class="container">
    <ul id="projects-list" class="list-unstyled row">
      <ProjectsListItem 
        v-for="project in projectsList" :key="project.id" :projectObj="project"
      />
    </ul>
  </section>
</template>

<style lang="scss" scoped>

</style>