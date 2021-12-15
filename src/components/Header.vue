<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">The Everything Store</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/products">Products</router-link>
        </li>

         <li v-if="auth" class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/account">My Account</router-link>
        </li>

         <li v-if="!auth" class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/login"><button class="btn btn-dark btn-outline-secondary text-light">Login</button></router-link>
        </li>

        <li v-if="!auth" class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/signup"><button class="btn btn-dark text-light btn-outline-secondary">Signup</button></router-link>
        </li>

        <li v-if="auth" class="nav-item">
          <button class="btn btn-dark text-light btn-outline-secondary" @click="onLogout">Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
  export default{ 
    computed:{
      auth(){
        return this.$store.state.token;
      }
    },
    methods:{
      onLogout(){
        this.$store.dispatch("logout");
      }
    }
  }
</script>
<style scoped>
.navbar-nav{
  align-items: center;
}

</style>