<template>
  <div>
      <h1>Movies</h1>
      <hr/>
      <table class="table">
        <thead> 
          <tr> 
            <th>Title</th>
            <th>Pitch Text</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="aProduct in theProducts" :key="aProduct.ProductID">
            <th>
              {{aProduct.productName}}
            </th>
            <th>
              {{aProduct.CategoryID}}
            </th>
            <th>
              {{aProduct.CategoryName}}
            </th>
            <th>
              <router-link :to="`/products/${aProduct.ProductID}`">
                <button class="btn btn-primary">
                Details
                </button>
              </router-link>
            </th>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  computed:{
    theProducts(){
      return this.$store.state.products; 
    }
  }
}
</script>

<style>

</style>