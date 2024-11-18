<script>
export default {
  name: "projectsListItem",
  data() {
    return {
      
    };
  },
  components: {
    
  },
  props: {
    projectObj: {
        required: true,
        type: Object,
    }
  },
  methods: {
    
  },
  created(){
    console.log(this.projectObj);

  }
};
</script>

<template>
    <li class="col-6 g-3">
        <div id="project-card" class="card">
            <div class="card-body">
                <div class="mb-2">
                    <h5 class="mb-1">Name projectObj: </h5>
                    <p class="card-text fw-bolder">
                        {{ projectObj.name }}
                    </p>
                </div>
                <div class="mb-2">
                    <h5 class="mb-1">Started on: </h5>
                    <p class="card-text fw-bolder">
                        {{ projectObj.date }}
                    </p>
                </div>
                <div class="mb-2">
                    <h5 class="mb-1">Type: </h5>
                    <p class="card-text fw-bolder">
                        {{ projectObj.type.name}}
                    </p>
                </div>
                
                <div class="mb-2">
                    <h5 class="mb-1">Description:</h5>
                    <p class="card-text fw-bolder">
                        {{ projectObj.description}}
                    </p>
                </div>
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>
  
</style>