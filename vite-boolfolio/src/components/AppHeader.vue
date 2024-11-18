<script>
export default {
  name: "AppHeader",
  data() {
    return {
      
    };
  },
  components: {
    
  },
  methods: {
    
  },
};
</script>

<template>
    <header>
        <nav class="navbar navbar-expand bg-success">
            <div class="container-fluid">
                <a class="navbar-brand fw-bolder text-warning" href="#">Vite-boolfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active text-white" aria-current="page" :to="{ 'name' : 'home'}">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active text-white" aria-current="page" :to="{ 'name' : 'projects'}">Projects</router-link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
  
</style>